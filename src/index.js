import { refs } from './js/refs';
import { fetchImages } from './js/apiService';
import { updateMarkup } from './js/updateMarkup';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.query.value;
  refs.galleryList.innerHTML = '';
  form.reset(); //clear input value
  page = 1;
  fetchImages(searchQuery, page).then(hits => {
    updateMarkup(hits);
    page += 1;
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchImages(searchQuery, page).then(hits => {
    updateMarkup(hits);
    page += 1;
  });
});
