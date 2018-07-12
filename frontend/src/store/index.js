import Vue from 'vue';
import Vuex from 'vuex';

import Api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        scheduler: {
            namespaced: true,
            state: {
                products: [
                    {
                        id: 1,
                        status: true,
                        name: "morkva",
                        price: 123
                    },
                    {
                        id: 2,
                        status: false,
                        name: "ogirok",
                        price: 32
                    },
                    {
                        id: 3,
                        status: true,
                        name: "kvasolya",
                        price: 66
                    }
                ]
            },
            getters: {
                getProducts: (state) => state.products
            },
            mutations: {
                handleProduct: (state, {id, key, value}) => {
                    state.products = state.products.map((product) => {
                        if (product.id !== id) {
                            return product;
                        }
                        else {
                            return {
                                ...product,
                                [key]: value
                            }
                        }
                    });
                },
                addNewProduct: (state, id) => {
                    state.products.push({
                        id,
                        status: false,
                        name: '',
                        price: ''
                    })
                }
            },
            actions: {
                addNewProduct: ({commit}) => {
                    Api('addNewProduct')
                    .then((result) => {
                        commit('addNewProduct', result);
                    })
                    .catch((err) => {
                        console.error(err);
                    })
                }
            }
        }
    },
    strict: true // false,
})
