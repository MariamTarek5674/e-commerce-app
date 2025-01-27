<template>
<section  class="fixed top-0 right-0 bottom-0 left-0 z-20 " style="background-color: rgba(241, 245, 249, 0.5);" :class="{ 'slide-out-right': isDisappearing }">
    <div  :class="{ 'slide-out-right': isDisappearing }">
      <div  class="flex flex-col gap-2 w-1/3 px-3 overflow-auto fixed top-0 bottom-0 right-0 z-30 bg-white py-6" @click.stop>
        <div class="flex px-4 justify-between items-center">
            <font-awesome-icon icon="times" class="text-2xl font-extrabold cursor-pointer" @click="closeCart" />
            <h1 class="text-2xl font-semibold">
                My Carts
            </h1>
        </div>
       <div v-if="userCarts.length>0 && !fetchCartLoading">
       <div v-for="(cart,index) in userCarts" :key="cart.id" class="flex flex-col gap-6">
        <div class="flex px-4 pt-4 !justify-end items-center">
                <button class="flex gap-2 items-center text-sm border-2 border-black font-semibold rounded-full whitespace-nowrap py-[.5rem] px-[1rem] hover:bg-red-600 hover:text-white hover:border-red-600 group transition-all duration-200"
                  @click="clearCart(cart.id)">
                    Clear
                    <font-awesome-icon icon="trash" class="text-red-500 text-sm group-hover:text-white"/>
                </button>
        </div>
        <div class="flex flex-col gap-2 px-5 py-2" v-for="product in cart.products" :key="product.id">
                <line-item-card :productData="product" />
        </div>
        <button class="min-w-[90%] w-auto m-auto text-xl border-2 border-black whitespace-nowrap py-[.5rem] px-[1rem] font-bold hover:text-white hover:bg-black transition-all duration-500">
              PAY {{ calculateCartTotal(cart)}} EGP
        </button>
        <hr v-if="index != userCarts.length-1" />
    </div>
  </div>
  <div v-else>
      <h1 class="font-bold text-4xl text-red-800 py-20 empty-cart">Empty Cart</h1>
  </div>
   </div>
  </div>
</section>
</template>

<script>
import lineItemCard from './components/lineItemCard.vue';

export default{
    name:"cartComponent",
    components:{
        lineItemCard,
    },
    data(){
        return{
        isDisappearing:false,  
    }
},
computed:{
    userCarts(){
        return this.$store.getters['cart/userCarts']
    },
    fetchCartLoading(){
      return this.$store.getters['cart/fetchCartLoading']
    }
},
mounted() {
    window.addEventListener('click',this.closeCart)
},
beforeUnmount() {
    window.removeEventListener('click', this.closeCart);
},
methods:{
    closeCart(){
      this.isDisappearing = true;
      setTimeout(() => {
        this.$store.commit('cart/toggleCartStatus')
      }, 500);
    },
    calculateCartTotal(cart) {
        let total = 0;
        cart.products.forEach(product => {
            const productDetails = this.$store.getters['home/getProductById'](product.productId);
            if (productDetails) {
                total += productDetails.price * product.quantity;
            }
        });
        return total.toFixed(2);
    },
    clearCart(id){
      this.$store.dispatch('cart/clearCart',id)
    }
},
}
</script>

<style>
@keyframes slideOutRight {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: .5;
    transform: translateX(50%);
  }
  70% {
    opacity: .3;
    transform: translateX(70%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}

.slide-out-right {
  animation: slideOutRight .5s forwards; 
}
</style>