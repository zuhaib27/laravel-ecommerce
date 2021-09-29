/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueRouter from 'vue-router';
import _ from 'lodash';
import axios from 'axios';
import VueAxios from 'vue-axios' 
Vue.use(VueRouter);

Vue.use(VueAxios, axios); 

//window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

try {
    Vue.prototype.$user_isadmin = document.querySelector("meta[name='user-admin']").getAttribute('content');
    Vue.prototype.$user_isvendor = document.querySelector("meta[name='user-vendor']").getAttribute('content');

}catch(err) { //means values are undefined. BAD PRACTICE!
    Vue.prototype.$user_isadmin = 0;
    Vue.prototype.$user_isvendor = 0;
}

const router = new VueRouter({
    mode: 'history',
    routes:require('./routes.js')
});

const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        order: {},
        admin: null
    },
    mutations: {
        setAdminUser(state, admin) {
            state.admin = admin;
        },
        updateProducts(state, products) {
            state.products = products;
        },
        addToCart(state, product) {
            let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
            if (productInCartIndex !== -1) {
                state.cart[productInCartIndex].quantity++;
                return;
            }

            product.quantity =1;
            state.cart.push(product);
        },
        removeFromCart(state, index) {
            state.cart.splice(index, 1);
        },
        updateOrder(state, order) {
            state.order = order;
        },
        updateCart(state, cart) {
            state.cart = cart;
        }

    },
    actions: {
        getProducts({ commit }) {
            //fetch the products and their attached categories from the api
            axios.get('/api/products')
                .then((response) => {
                    commit('updateProducts', response.data);
                })
                .catch((error) => console.error(error));
        },
        clearCart({ commit }) {
            commit('updateCart', []);
        },
        //deleteProduct(id) {
        //    return http().delete(`products/${id}/delete`);
        //}
    },
    getters: {
        isAdmin(state) {
            return state.user !== null;
        }
    }

});


const app = new Vue({
    router,
    store,
    el: '#app',
    created() {
        store.dispatch('getProducts')
        .then(_ => {}) //Promise handling
        .catch((error) => console.error(error));
    }
}); 
