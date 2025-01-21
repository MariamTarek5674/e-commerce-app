<template>
    <h1>Home</h1>
</template>

<script>
export default{
    name:'Home',
    mounted() {
        this.fetchProducts()
    },
    methods: {
        async fetchProducts(){
            await this.$store.dispatch('home/fetchProducts')
        }
    },
}
</script>