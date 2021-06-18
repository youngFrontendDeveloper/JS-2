const filter_el = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="search" @submit.prevent='$parent.$refs.products.filter(userSearch)'>
        
    <input v-model="userSearch" class="search__input" type="text" placeholder="Поиск">
        <!--   <img class="search__btn-remove" @click="clearSearchLine" src="img/clear.png" alt="Стереть">-->
        
        <button class="search__btn" type="submit">
            <img src="img/search.png" alt="Искать">
        </button>
    </form>
    `,

    // method: {

    //     clearSearchLine() {
    //         this.userSearch = '';
    //     },
    // }
}