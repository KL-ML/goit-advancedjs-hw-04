import { errorAllert } from './izi-toasts';
import { removeFromLS } from './locale-storage';
import { getPhotos, searchParams } from './pixabay-api';
import {
  renderGallery,
  renderLoader,
  resetGallery,
  resetLoader,
  scrollByPage,
} from './render-functions';
import LoadMoreButton from './load-more-btn';

const searchForm = document.querySelector('.form');
const loadMoreButton = new LoadMoreButton(document.querySelector('.load-more'));

async function onSubmitForm(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();
  if (query === '') {
    errorAllert('Enter your search request');
    return;
  }
  loadMoreButton.disable();
  loadMoreButton.hide();

  resetGallery();
  renderLoader();
  searchParams.q = query;
  searchParams.page = 1;
  try {
    const photos = await getPhotos();
    if (photos.total === 0) {
      errorAllert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      loadMoreButton.hide();
      resetLoader();
      resetGallery();
      return;
    }

    resetLoader();
    renderGallery(photos);
    if (searchParams.page === Math.ceil(photos.totalHits / 15)) {
      loadMoreButton.show();
      loadMoreButton.addEndCollectionMessage();
    } else {
      loadMoreButton.removeEndCollectionMessage();
      loadMoreButton.enable();
      loadMoreButton.show();
      loadMoreButton.button.addEventListener('click', onLoadMoreClick);
    }
  } catch (error) {
    errorAllert(`Error ${error}`);
    resetLoader();
  } finally {
    searchForm.reset();
  }
  event.target.reset();
  removeFromLS();
}

async function onLoadMoreClick() {
  loadMoreButton.disable();
  loadMoreButton.hide();
  renderLoader();
  searchParams.page += 1;

  try {
    const photos = await getPhotos(searchParams);
    resetLoader();
    renderGallery(photos);
    scrollByPage();

    if (searchParams.page === Math.ceil(photos.totalHits / 15)) {
      loadMoreButton.addEndCollectionMessage();
      loadMoreButton.show();
    } else {
      loadMoreButton.removeEndCollectionMessage();
      resetLoader();
      loadMoreButton.enable();
      loadMoreButton.show();
    }
  } catch (err) {
    errorAllert(`Error ${err}`);
    loadMoreButton.hide();
  }
}

export { onSubmitForm, onLoadMoreClick };
