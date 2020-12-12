import { refs } from './js/refs';
import {fetchImages} from './js/apiService';
import {updateMarkup} from './js/updateMarkup';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  refs.galleryList.innerHTML = '';
  form.reset(); //clear input value
  fetchImages(inputValue).then(({hits}) => updateMarkup(hits));

  
});

