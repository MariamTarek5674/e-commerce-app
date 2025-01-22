<template>
    <div class=" bg-gray-200 rounded-md animate-pulse"></div>
</template>

<script>
export default{
    name:'Skeleton'
}
</script>

<style scoped>
@keyframes pulse {
    0% {
        background-color: #e0e0e0;
    }
    50% {
        background-color: #f0f0f0;
    }
    100% {
        background-color: #e0e0e0;
    }
}

.animate-pulse {
    animation: pulse 1.5s infinite ease-in-out;
}
</style>