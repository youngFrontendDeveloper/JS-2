'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    imgCatalog: 'img/noimage.jpg',
    products: [],
    searchLine: '',
    show: false,
    filteredGoods: [],
    isVisibleCart: false,
    ifNull: false,

  }, //end data

  methods: {

    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        });
    },

    addProduct(product) {
      console.log(product.id_product);
    },

    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.products.filter(good => regexp.test(good.product_name));
      if (this.filteredGoods.length == 0) {
        this.ifNull = true;
        console.log(this.ifNull);        
      } else {
        this.ifNull = false;
      }
    },
    clearSearchLine() {
      this.searchLine = '';
    }

  }, //end methods

  mounted() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filteredGoods.push(el);
        }
      });


  }, //end mounted


  // watch: {
  //   filteredGoods() {
  //     this.filterGoods();
  //   },


  // filterGoods() {
  //   const regexp = new RegExp(this.searchLine, 'i');
  //   this.filteredGoods = this.products.filter(good => regexp.test(good.product_name));
  // },

  // }, //end watch

}); // end Vue