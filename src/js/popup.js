// Открытие модального окна корзины
const cart = document.querySelector('.cart-button');
const cartPopup = document.querySelector('.cart-popup');

cart.addEventListener('click', () => {
  cartPopup.classList.add('open');
});

// Закрытие модального окна корзины
const cartPopupClose = document.querySelector('.cart-popup__close');

cartPopupClose.addEventListener('click', () => {
  cartPopup.classList.remove('open');
});