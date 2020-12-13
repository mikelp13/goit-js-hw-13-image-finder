import { refs } from '../refs';

export const loadImagesBtn = {
  enabled() {
    refs.loadMoreBtn.classList.remove('is-hidden');

    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Load more';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },

  disabled() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
};
