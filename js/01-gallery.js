import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onCreateBigIMGClick);

function creatItem({ preview, original, description }) {
  const itemEl = document.createElement("div");
  itemEl.classList.add("gallery__item");

  const itemLinkEl = document.createElement("a");
  itemLinkEl.classList.add("gallery__link");
  itemLinkEl.href = original;

  const imgEl = document.createElement("img");
  imgEl.classList.add("gallery__image");
  imgEl.src = preview;
  imgEl.dataset.source = original;
  imgEl.alt = description;

  itemLinkEl.append(imgEl);
  itemEl.append(itemLinkEl);

  return itemEl;
}

function creatGalleryItems(arr) {
  const items = arr.map((item) => creatItem(item));
  galleryEl.append(...items);
}

creatGalleryItems(galleryItems);

function onCreateBigIMGClick(e) {
  // забороняємо стандартні дії
  e.preventDefault();
  // вказую, що відкривати лише img
  const isIMGEl = e.target.nodeName;
  if (isIMGEl !== "IMG") {
    return;
  }
  // виклик бібліртеки, відкриття модалки
  const instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}' width="800" height="600">
`)

  instance.show()
  
  // закриття модалки через esc
  galleryEl.addEventListener('keydown', onCloseModalWindow);

  function onCloseModalWindow(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
console.log(galleryItems);