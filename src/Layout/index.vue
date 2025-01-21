<template>
    <Navigation-bar/>
    <router-view/>
</template>

<script >
import NavigationBar from '../components/NavigationBar/index.vue'
export default{
    name:"LayoutComponent",
    components:{
        NavigationBar
    }
}
</script>