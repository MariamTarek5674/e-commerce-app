<template>
    <section class="px-6 md:px-28 py-40 min-h-screen flex flex-col items-center justify-center">
        <product-details-skeleton v-if="loading" />
        <div v-else class='md:flex gap-6 h-full'>
            <div class="md:w-1/3 h-80 p-2">
                <img :src='product.image' :alt='product.title' class="object-contain h-full w-full" />
            </div>
            <div class="md:w-2/3 md:p-6 flex flex-col gap-4 text-left">
                <h2 class="text-3xl font-bold">{{ product?.title }}</h2>
                <p class="text-lg font-thin">{{ product?.description }}</p>
                <rating-star :productRate='product?.rating?.rate'/>
                <p class="text-lg">{{ product?.price }} EGP</p>
                <button class="text-lg w-full border-2 border-black font-bold whitespace-nowrap py-[.5rem] px-[1rem] transition-all duration-300 hover:bg-black hover:text-white">Add To Cart +</button>
            </div>
        </div>
    </section>
</template>

<script>
import RatingStar from '../../components/ProductCard/components/RatingStar.vue'
import Skeleton from '../../components/Skeleton.vue'
import ProductDetailsSkeleton from './ProductDetailsSkeleton.vue'
export default{
    name:'productDetails', 
    components:{
        RatingStar,
        Skeleton,
        ProductDetailsSkeleton
    },
    data(){
        return{
            product:{},
            loading:true
        }
    },
    mounted(){
        this.fetchProduct()
    },
    methods:{
        async fetchProduct(){
            try{
                const id = this.$route.params.id;
                let response =await this.$store.dispatch('home/fetchProductDetails',id)
                this.product=response.data
                this.loading=false
            }catch(error){
                console.log(error)
                this.$toaster.error('Something went wrong!')
            }
        }
    }
}
</script>
