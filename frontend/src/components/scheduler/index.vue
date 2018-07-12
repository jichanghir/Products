<template lang="pug">
    div.scheduler
        .scheduler__row(v-for="item in products" :key="item.id")
            product(
                :product="item"
                @onChange="onChangeProduct"
            )
        button(
            @click="addNewProduct"
        ).scheduler__add-new-product Add New

</template>

<script>

// import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

import product from './product';

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('scheduler');

export default {
    props: {},
    data(){
        return {}
    },
    computed: {
        ...mapGetters(['getProducts']),
        products() {
            return this.getProducts
        }
    },
    methods: {
        ...mapMutations(['handleProduct']),
        ...mapActions(['addNewProduct']),
        onChangeProduct({id, key, value}) {
            this.handleProduct({id, key, value});
        }
    },
    components: {
        product
    }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
