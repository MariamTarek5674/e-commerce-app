<template>
    <div class="relative group flex flex-col gap-3 cursor-pointer">
        <div class="overflow-hidden aspect-w-1 aspect-h-1 h-48 md:h-80 ">
            <skeleton class="w-full h-full" />
        </div>
        <div>
            <div>
                <skeleton class="w-1/3 h-4"/>
            </div>
            <div class="flex items-start justify-between mt-4 space-x-4">
                <skeleton class="h-6 w-2/3"/>
                <skeleton class="h-6 w-1/3"/>
            </div>
        </div>
        <skeleton class='w-full h-12' />
    </div>   
</template>

<script>
import Skeleton from '../Skeleton.vue';
export default {
    name: 'ProductCardSkeleton',
    components: {
        Skeleton,
    },
};
</script>
