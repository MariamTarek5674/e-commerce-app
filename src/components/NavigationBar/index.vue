<template>
    <nav class="fixed top-0 right-0 left-0 py-5 z-20 bg-white shadow-md	">
   <div class="w-[90%] m-auto flex items-center justify-between">
     <div class="logo">
       <RouterLink class="text-black font-bold cursor-pointer text-3xl" to="">A Y N</RouterLink>
       <p class="text-xs text-red-500 font-bold">All You Need</p>
     </div>
     <div>
       <i class="font-bold text-2xl cursor-pointer relative" >
         <font-awesome-icon icon="shopping-cart" class="icon text-black" />
         <span class="absolute top-0 -mt-5 right-0 -me-4 inline-flex items-center justify-center py-[0.2rem] px-[0.5rem] font-bold text-sm text-black border-black font-extrabold"> 3 </span>
       </i>
     </div>
   </div>
 </nav>
</template>

<script>
export default{
   name:"NavigationBar",
}
</script>