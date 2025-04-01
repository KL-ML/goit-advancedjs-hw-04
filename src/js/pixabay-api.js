import axios from 'axios';

const API_KEY = `30636701-b7bfaf1719dc5d89c8acde7b5`;
const BASE_URL = `https://pixabay.com/api/`;

const searchParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
  q: '',
  page: 1,
};

async function getPhotos() {
  const { data } = await axios.get(BASE_URL, {
    params: searchParams
  });
  return data;
}

export { getPhotos, searchParams };
