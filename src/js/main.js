'use strict';

//Конструктор для создания товара на странице
class ProductItem {
  constructor(product, img = 'img/noimage.jpg', title = 'Product Name', price = 'Is unknown') {
    this.img = product.img || img;
    this.title = product.title || title;
    this.price = product.price || price;
  }
  render() {
    return `<div class='products__item'>
            <img src=${this.img} class='products__item-img' alt='Изображение товара'>
            <h3 class='products__item-title'>${this.title}</h3>
            <p class='products__item-text'>${this.price} rub.</p>
            <button class='products__item-btn'>Add</button>
          </div>`;
  }
}

//Конструктор для создания списка товаров на странице

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [{
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
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productItem = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', productItem.render());
    }
  }
}

let list = new ProductsList();
list.render();

//Конструктор для создания элемента корзины 

class CartItem {
  constructor(product) {
    this.img = product.img;
    this.title = product.title;
    this.price = product.price;
  }
}

//Конструктор для создания корзины 

class Cart {
  add() {}

  delite() {}

  increaseProductQuantity() {}

  reduceProductQuantity() {}
}

// const goods = [{
//     img: 'img/good-1.jpg',
//     title: 'Shirt',
//     price: 150
//   },
//   {
//     img: 'img/good-2.jpg',
//     title: 'Socks',
//     price: 50
//   },
//   {
//     img: 'img/good-3.jpg',
//     title: 'Jacket',
//     price: 350
//   },
//   {
//     img: 'img/good-4.jpg',
//     title: 'Shoes',
//     price: 250
//   },
//   {},
// ];

// const renderGoodsItem = (img = 'img/noimage.jpg', title = 'Product Name', price = 'Is unknown') => {
//   return `<div class='goods-item'>
//             <img src=${img} class='goods-item__img' alt='Изображение товара'>
//             <h3 class='goods-item__title'>${title}</h3>
//             <p class='goods-item__text'>${price} rub.</p>
//             <button class='goods-item__btn'>Add</button>
//           </div>`;

// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
//   // document.querySelector('.goods-list').innerHTML = goodsList.join('');
//   document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.img, item.title, item.price)).join('');
// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price));
//   // document.querySelector('.goods-list').innerHTML = goodsList.join('');
//   document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.img, item.title, item.price)).join('');
// };

// renderGoodsList(goods);