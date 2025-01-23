<template>
    <div class="flex justify-between h-[100px] ">
                  <div class="flex w-1/4 h-full gap-2">
                    <img class="h-full object-contain"
                      :src="cardData.image"
                      alt=""
                    />
                    <div class="flex flex-col justify-center items-start whitespace-nowrap">
                      <div class="text-left">
                        {{ truncatedTitle(cardData.title)   }}
                      </div>
                      <div class="font-bold text-lg p-2">{{cardData.price}} EGP</div>
                     
                    </div>
                  </div>
                  <div
                    class='w-1/4 pt-2 flex justify-between items-center'
                  >
                    <button
                      class='w-[25px] h-[25px] border-black border-2 font-bold cursor-pointer flex items-center  justify-center p-0 m-0'
                      >
                       -
                    </button>
                    <span class="font-bold text-black">{{cardData.quantity}}</span>
                    <button
                      class="w-[25px] h-[25px] border-black border-2 font-bold cursor-pointer flex items-center  justify-center p-0 m-0 "
                    >
                      +
                    </button>
                  </div>
                </div>
</template>
<script>
export default{
    name:'lineItemCard',
    props:{
        cardData:{
            type:Object,
            Required:true,
        }
    },
    methods: {
    truncatedTitle(title) {
      return title.length > 20 ? title.slice(0, 20) + '...' : title;
    }
},

}
</script>