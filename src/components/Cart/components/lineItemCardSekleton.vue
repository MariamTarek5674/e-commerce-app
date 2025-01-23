<template>
 <div class="flex justify-between h-[100px]">
    <div class="flex w-full h-full gap-2">
        <skeleton class="h-full w-1/4"/>
        <div class="flex gap-2 w-2/3 flex-col justify-center items-start whitespace-nowrap">
            <skeleton class="h-6 w-3/4"/>
             <skeleton class="h-6 w-1/2"/>
        </div>
    </div>
    <div class='w-1/4 pt-2 flex justify-between items-center'>
       <skeleton class="h-4 w-4"/>
       <skeleton class="h-4 w-4"/>
       <skeleton class="h-4 w-4"/>
    </div>
 </div>
</template>

<script>
import Skeleton from '../../Skeleton.vue';
export default{
    name:'lineItemCardSeleton',
    components:{
        Skeleton
    }
}
</script>