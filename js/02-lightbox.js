import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

creatMarkUp();

function creatMarkUp() {
    const markup = galleryItems.reduce((acc, { preview, original, description }) => {
        acc += `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
        return acc;
    }, '');
    gallery.insertAdjacentHTML('beforeend', markup);
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
});

console.log(galleryItems);
