<template>
    <div class="relative group flex flex-col gap-3">
                <div class="overflow-hidden aspect-w-1 aspect-h-1 h-48 md:h-80 md:p-5 ">
                    <img class="w-full h-full transition-all duration-300 group-hover:scale-125 object-contain" :src="product.image" :alt="product.title" />
                </div>
                <div class="absolute left-3 top-3">
                    <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-slate-100 rounded-full">New</p>
                </div>
                <div>
                    <div>
                        <rating-star :productRate="product.rating.rate" />
                    </div>
                    <div class="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base h-full">
                                {{truncateTitle(product.title)}}
                        </h3>
                    </div>

                    <div class="text-right">
                        <p class="text-xs font-bold text-gray-900 sm:text-sm md:text-base text-nowrap">{{product.price }} EGP</p>
                    </div>
                </div>
                </div>
                <div>
                    <button class="text-lg w-full border-2 border-black font-bold whitespace-nowrap py-[.5rem] px-[1rem] transition-all duration-300 hover:bg-black hover:text-white">Add To Cart +</button>
                </div>
            </div>
</template>

<script>
import RatingStar  from './components/RatingStar.vue'
export default{
    name: 'ProductCard',
    components:{
        RatingStar
    },
    props: {
        product:{
            type: Object,
            required:true
        }
    },
    methods:{
        truncateTitle(title){
            return title.length > 15 ? title.substring(0, 15) + '...' : title;
        }
    }
}
</script>