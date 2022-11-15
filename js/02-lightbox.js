import { galleryItems } from './gallery-items.js';

// 3)Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//  Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4)Подивися в документації секцію «Options» і додай відображення підписів до зображень з 
// атрибута alt.Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття
// зображення.

const galleryEl = document.querySelector(".gallery");

// galleryEl.addEventListener("click", onCreateBigIMGClick);

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


console.log(galleryItems);
