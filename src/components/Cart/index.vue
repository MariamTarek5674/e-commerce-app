<template>
<section class="fixed top-0 right-0 bottom-0 left-0 z-20 " style="background-color: rgba(241, 245, 249, 0.5);" :class="{ 'slide-out-right': isDisappearing }">
    <div class=" flex flex-col items-end"   :class="{ 'slide-out-right': isDisappearing }">
        <div class="flex flex-col gap-2 w-1/3 px-3 overflow-auto fixed top-0 bottom-0 right-0 z-30 bg-white py-6" @click.stop>
        <div class="flex px-4 justify-between items-center">
            <font-awesome-icon icon="times" class="text-2xl font-extrabold cursor-pointer" @click="closeCart" />
            <h1 class="text-2xl font-semibold">
                My Cart
            </h1>
            <div>
                <button class="flex gap-2 items-center text-sm border-2 border-black font-semibold rounded-full whitespace-nowrap py-[.5rem] px-[1rem] hover:bg-red-600 hover:text-white hover:border-red-600 group transition-all duration-200">
                    Clear
                    <font-awesome-icon icon="trash" class="text-red-500 text-sm group-hover:text-white"/>
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-2 px-5 py-2" v-for="item in 5" :key="item">
            <line-item-card :cardData="card" />
        </div>
        <button class="min-w-[90%] w-auto m-auto text-xl border-2 border-black whitespace-nowrap py-[.5rem] px-[1rem] font-bold hover:text-white hover:bg-black transition-all duration-500">
              PAY 4000000 EGP
        </button>
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
            card:{ 
              id: 1,
              quantity:"5",
              title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
              price: 109.95,
              description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
              category: "men's clothing",
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              rating: {
              rate: 3.9,
               count: 120,
            }
            
        },
        isDisappearing:false,  
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