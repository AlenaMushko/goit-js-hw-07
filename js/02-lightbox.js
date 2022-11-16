import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickCreateModalWindow);

function creatItem({ preview, original, description }) {

  const itemEl = document.createElement("a");
  itemEl.classList.add("gallery__item");
  itemEl.href = original;

  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.src = preview;
  imgEl.alt = description;

  itemEl.append(imgEl);

  return itemEl;
}

function creatGalleryItems(arr) {
  const items = arr.map((item) => creatItem(item));
  galleryEl.append(...items);
}

creatGalleryItems(galleryItems);

function onClickCreateModalWindow(e) {
  // забороняємо стандартні дії
  e.preventDefault();
  // вказую, що відкривати лише img
  const isIMGEl = e.target.nodeName;
  if (isIMGEl !== "IMG") {
    return;
  }
  // підключаємо бібліотеку SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
  });
};

console.log(galleryItems);
