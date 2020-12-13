import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export function onOpenModal(event) {
  const largeImage = event.target.dataset.source;
  if (event.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(`
  <img src=${largeImage} alt="${event.target.alt}">
`);

  instance.show();
}
