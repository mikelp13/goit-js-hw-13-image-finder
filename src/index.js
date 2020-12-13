import { refs } from './js/refs';
import imageService from './js/apiService';
import { updateMarkup } from './js/updateMarkup';
import { scrollPage } from './js/scroll';
import { loadImagesBtn } from './js/components/loadMoreButton';
import { onOpenModal } from './js/components/modal';
import { queryInfo, searchingError, queryNotice } from './js/notification';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', fetchImagesList);
refs.galleryList.addEventListener('click', onOpenModal);

function onSearchFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  imageService.query = form.elements.query.value;
 if(!imageService.query){
   queryInfo();
   return
 }
 clearGalleryList();
  form.reset(); //clear input value
  imageService.resetPage();
  fetchImagesList();
}

function fetchImagesList() {
  loadImagesBtn.disabled();
  imageService.fetchImages().then(hits => {
    updateMarkup(hits);
    scrollPage();
    loadImagesBtn.enabled();
    return hits
  }).then(hits => inputVerefication(hits))
 
}

function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}

function inputVerefication(hits) {
  if (hits.length === 0){
    loadImagesBtn.hideBtn() 
    queryNotice();
  } else if (hits.status >= 400){
    searchingError();
  } 
}