<template>
    <nav class="fixed top-0 right-0 left-0 py-5 z-20 bg-white shadow-md	">
   <div class="w-[90%] m-auto flex items-center justify-between">
     <div class="logo">
       <router-link to="/" class="text-black font-bold cursor-pointer text-3xl">A Y N</router-link>
       <p class="text-xs text-red-500 font-bold">All You Need</p>
     </div>
     <div class="flex gap-8 items-center">
      <div>
        <i class="font-bold text-2xl cursor-pointer relative" @click="changeCartStatus" >
         <font-awesome-icon icon="shopping-cart" class="icon text-black" />
         <span class="absolute top-0 -mt-5 right-0 -me-4 inline-flex items-center justify-center py-[0.2rem] px-[0.5rem] text-sm text-black border-black font-extrabold"> 3 </span>
       </i>
      </div>
       <button class="bg-white px-4 py-2 border-2 border-red-500 hover:bg-red-600 hover:text-white text-black rounded-full flex items-center gap-2" @click="handleLogout">Logout</button>
     </div>
   </div>
 </nav>
</template>

<script>
export default{
   name:"NavigationBar",
   methods:{
    handleLogout(){
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    },
    changeCartStatus(){
      this.$store.commit('cart/toggleCartStatus')
    }
   }
}
</script>