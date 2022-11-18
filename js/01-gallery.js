import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onCreateBigIMGClick);

const itemEl = galleryItems
  .map(
    (image) => `
  <div class="gallery__item"><a class="gallery__link" href =${image.original} ><img class="gallery__image" 
  src = ${image.preview} data-source = ${image.original} alt = ${image.description}/></a></div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", itemEl);

function onCreateBigIMGClick(e) {
  // забороняємо стандартні дії
  e.preventDefault();
  // вказую, що відкривати лише img
  const isIMGEl = e.target.nodeName;
  if (isIMGEl !== "IMG") {
    return;
  }
  // виклик бібліртеки, відкриття модалки
  const instance = basicLightbox.create(
    `
    <img src='${e.target.dataset.source}' width="800" height="600">
  `,
    {
      onShow: (instance) => {
        galleryEl.addEventListener("keydown", onESCCloseModal);
      },
      onClose: (instance) => {
        galleryEl.addEventListener("keydown", onESCCloseModal);
      },
    }
  );
  instance.show();

  // закриття модалки через esc
  galleryEl.addEventListener("keydown", onESCCloseModal);

  function onESCCloseModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
console.log(galleryItems);
