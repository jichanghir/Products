<template lang="pug">
    div.product
        .product__status
            input(
                type="checkbox"
                :checked="product.status"
                @change="handleStatus"
            )
        .product__name
            input(
                type="text"
                :value="product.name"
                @input="handleName"
            )
        .product__price
            input(
                type="number"
                :value="product.price"
                @input="handlePrice"
            )
</template>

<script>

// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('scheduler');

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data(){
        return {}
    },
    computed: {},
    methods: {
        // ...mapMutations(['setData'])
        handleStatus(e) {
            this.$emit('onChange', {
                id: this.product.id,
                key: 'status',
                value: e.target.checked
            });
        },
        handleName(e) {
            this.$emit('onChange', {
                id: this.product.id,
                key: 'name',
                value: e.target.value
            });
        },
        handlePrice(e) {
            this.$emit('onChange', {
                id: this.product.id,
                key: 'price',
                value: e.target.value
            });
        }
    },
    components: {}
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
