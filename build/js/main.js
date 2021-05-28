'use strict';

const goods = [{
    img: 'img/good-1.jpg',
    title: 'Shirt',
    price: 150
  },
  {
    img: 'img/good-2.jpg',
    title: 'Socks',
    price: 50
  },
  {
    img: 'img/good-3.jpg',
    title: 'Jacket',
    price: 350
  },
  {
    img: 'img/good-4.jpg',
    title: 'Shoes',
    price: 250
  },
  {},
];

const renderGoodsItem = (img = 'img/good-11.jpg', title = 'Product Name', price = 'Is unknown') => {
  return `<div class='goods-item'><img src=${img} class='goods-item__img' alt='Изображение товара'><h3 class='goods-item__title'>${title}</h3><p class='goods-item__text'>${price} rub.</p><button class='goods-item__btn'>Add</button></div>`;

};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);