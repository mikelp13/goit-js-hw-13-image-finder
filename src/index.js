import { refs } from './js/refs';
import imageService from './js/apiService';
import { updateMarkup } from './js/updateMarkup';
import 'material-design-icons/iconfont/material-icons.css';
import './styles.css';

 refs.loadMoreBtn.classList.add('is-hidden');

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  imageService.query = form.elements.query.value;
  refs.galleryList.innerHTML = '';
  form.reset(); //clear input value
  imageService.resetPage();

  imageService.fetchImages().then(hits => {
    updateMarkup(hits);
   refs.loadMoreBtn.classList.remove('is-hidden');
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  refs.loadMoreBtn.disabled = true;
  refs.loadMoreBtnLabel.textContent = 'Loading...'
  refs.loadMoreBtnSpinner.classList.remove('is-hidden')
  
  imageService.fetchImages().then(hits => {
    updateMarkup(hits);
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Load more'
    refs.loadMoreBtnSpinner.classList.add('is-hidden')
    
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
