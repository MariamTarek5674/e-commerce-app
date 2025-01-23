<template>
    <Navigation-bar/>
    <cart v-if="isCartOpen"/>
    <router-view/>
</template>

<script >
import NavigationBar from '../components/NavigationBar/index.vue'
import Cart from '../components/Cart/index.vue'
export default{
    name:"LayoutComponent",
    components:{
        NavigationBar,
        Cart
    },
    computed:{
        isCartOpen(){
            return this.$store.getters['cart/isCartOpen']
        }
    },
    mounted(){
      this.$store.dispatch('cart/fetchUserCarts')
    }
}
</script>