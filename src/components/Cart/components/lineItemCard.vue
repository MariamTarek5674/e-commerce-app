<template>
    <div v-if="!loading" class="flex justify-between h-[100px] ">
         <div class="flex w-1/4 h-full gap-2">
            <img class="h-full object-contain" :src="product.image" alt="" />
            <div class="flex flex-col justify-center items-start whitespace-nowrap">
                <div class="text-left product-title">
                        {{ truncatedTitle(product.title)   }}
                </div>
                <div class="font-bold text-lg p-2 product-price">{{product.price}} EGP</div>
                     
             </div>
        </div>
        <div class='w-1/4 pt-2 flex justify-between items-center'>
            <button class='w-[25px] h-[25px] border-black border-2 font-bold cursor-pointer flex items-center  justify-center p-0 m-0'
              @click="handleQuantityChange('-')">
                       -
            </button>
            <span class="font-bold text-black">{{productData.quantity}}</span>
            <button class="w-[25px] h-[25px] border-black border-2 font-bold cursor-pointer flex items-center  justify-center p-0 m-0 "
              @click="handleQuantityChange('+')">
                      +
            </button>
        </div>
    </div>
    <line-item-card-skeleton v-else />
</template>
<script>
import lineItemCardSkeleton from './lineItemCardSekleton.vue'
export default{
    name:'lineItemCard',
    components:{
        lineItemCardSkeleton
    },
    props:{
        productData:{
            type:Object,
            Required:true,
        }
    },
    data(){
        return{
            product:{},
            loading:true,
        }
    },
    computed:{
        cartId(){
            return this.$store.getters['cart/userCarts'][0].id
        }
    },
    mounted(){
        this.fetchProduct()
    },
    methods: {
    truncatedTitle(title) {
      return title?.length > 20 ? title.slice(0, 20) + '...' : title;
    },
    async fetchProduct(){
       let response= await this.$store.dispatch('home/fetchProductDetails',this.productData.productId)
       this.product=response.data
       this.loading=false
    },
    async handleQuantityChange(changeType){
        if(changeType=='+'){
            await this.$store.dispatch('cart/updateProductQuantity',{productId:this.productData.id, quantity:this.productData.quantity+1,cartId:this.cartId})
        }else{
            await this.$store.dispatch('cart/updateProductQuantity',{productId:this.productData.id, quantity:this.productData.quantity-1,cartId:this.cartId})
        }
    }
},

}
</script>