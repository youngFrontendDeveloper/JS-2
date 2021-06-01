const cart = document.querySelector('.cart-button');
const cartPopup = document.querySelector('.cart-popup');

cart.addEventListener('click', (e) => {
  cartPopup.classList.add('open');
});