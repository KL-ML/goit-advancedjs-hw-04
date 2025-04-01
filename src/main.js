import { onSubmitForm } from './js/events-handlers';
import {
  populateInputData,
  setInputDataToLocalStorage,
} from './js/locale-storage';

const searchForm = document.querySelector('.form');

populateInputData(searchForm);

searchForm.addEventListener('input', setInputDataToLocalStorage);
searchForm.addEventListener('submit', onSubmitForm);

