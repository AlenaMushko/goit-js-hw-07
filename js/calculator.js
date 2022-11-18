const form = document.querySelector('.form');
const totalEl =
  `<p>The total cost <span class="totalPrice"></span> $.</p>`;
form.insertAdjacentHTML("beforeend", totalEl);
const spanEl = document.querySelector('.totalPrice');
const spanKgEl = document.querySelector('.amount');

function onFormCalculator(form) {
  const {
    elements: {
      price,
      quantity,
    }
  } = form;
  const totalPrice = (price.value * quantity.value).toFixed(2);

  spanEl.innerHTML = totalPrice;
   spanKgEl.textContent = quantity.value;
};

form.addEventListener('input', e => {
  onFormCalculator(e.currentTarget)
});
//  при загрузці сторінки показує ціну 1 кг 
document.addEventListener('DOMContentLoaded', e => {
  onFormCalculator(form)
});