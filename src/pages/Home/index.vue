<template>
    <section class="py-28 bg-white ">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-md mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
            <p class="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        </div>

        <div v-if="!loading" class="grid grid-cols-1 gap-10 md:gap-6 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            <div v-for="product in products" :key="product.id">
                <product-card :product="product" />
            </div>
        </div>
        <div v-else class="grid grid-cols-1 gap-10 md:gap-6 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            <div v-for="(product,index) in 8" :key="index">
                <product-card-skelton />
            </div>
        </div>
    </div>
</section>

</template>

<script>
import ProductCard from '../../components/productCard/index.vue'
import ProductCardSkelton from '../../components/productCard/ProductCardSkelton.vue'

export default{
    name:'Home',
    components:{
        ProductCard,
        ProductCardSkelton
    },
    data(){
        return{
            loading:true
        }
    },
    computed: {
        products(){
            return this.$store.getters['home/products']
        }
    },
    mounted() {
        this.fetchProducts()
    },
    methods: {
        async fetchProducts(){
            await this.$store.dispatch('home/fetchProducts')
            this.loading=false
        }
    },
}
</script>