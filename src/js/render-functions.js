import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wraper');

let simpleLB = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function renderGallery(images) {
  const markup = images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
            <div class="photo-card">
              <a href="${largeImageURL}" class="img-link">
                  <img class="img" src="${webformatURL}" alt="${tags}" width=360px; loading="lazy" />
              </a>
              <div class="info">
                  <p class="info-item">
                      <b>Likes </b>${likes}
                  </p>
                  <p class="info-item">
                      <b>Views </b>${views}
                  </p>
                  <p class="info-item">
                      <b>Comments </b>${comments}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${downloads}
                  </p>
              </div>
            </div>
        `;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  simpleLB.refresh();
}

function resetGallery() {
  gallery.innerHTML = '';
}

function renderLoader() {
  loader.classList.add('active');
}

function resetLoader() {
  loader.classList.remove('active');
}

function scrollByPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export {
  renderGallery,
  resetGallery,
  renderLoader,
  resetLoader,
  scrollByPage,
};
