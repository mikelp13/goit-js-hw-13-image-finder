import { refs } from '../js/refs';
import imgTpl from '../templates/img-card.hbs'

export function updateMarkup (hits) {
  refs.galleryList.insertAdjacentHTML('beforeend', imgTpl(hits))
}