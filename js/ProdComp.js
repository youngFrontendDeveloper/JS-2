const product = {
    props: ['img', 'product'],
    template: `<div class="products__item">
                        <img :src="img" alt="Some img" products__item-img>
                        <div class="desc">
                            <h3 class="products__item-title">{{ product.product_name }}</h3>
                            <p class="products__item-text">{{ product.price }} $</p>
                            <button class="products__item-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                        </div>
                    </div>`
}

const products = {
    components: {
        product
    },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'img/noimage.jpg',
            filtered: []
        }
    },
    mounted() {
        console.log(this.$root.$refs)

        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
                console.log(this.filtered)
            });
    },
    methods: {
        filter(val) {
            let regExp = new RegExp(val, 'i');
            this.filtered = this.products.filter(el => regExp.test(el.product_name))
        }
    },
    template: `
    <div class="products">
        <product 
        v-for="product of filtered" 
        :key="product.id_product"
        :img="imgCatalog"
        :product="product"></product>
    </div>
    `
}