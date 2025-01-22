<template>
        <div class="w-full flex gap-6 h-full">
            <skeleton class="w-1/3 h-80" />
            <div class="w-2/3 p-6 flex flex-col gap-4">
                <skeleton class="h-8 w-1/2" />
                <skeleton class="h-28 w-full" />
                <skeleton class="h-4 w-1/4" />
                <skeleton class="h-6 w-1/4" />
                <skeleton class="h-12 w-full" />
            </div>
        </div>
</template>

<script>
import Skeleton from '../../components/Skeleton.vue'
export default{
    name:"ProductDetailsSkeleton",
    components:{
        Skeleton
    }
}
</script>