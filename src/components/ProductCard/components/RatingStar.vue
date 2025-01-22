<template>
    <div class="flex gap-1">
      <div 
        v-for="star in 5"
        :key="star"
        class="star"
      >
        <span class="empty">★</span>
        <span
          class="filled"
          :style="{ width: star <= Math.floor(productRate) ? '100%' : star === Math.ceil(productRate) && !Number.isInteger(productRate) ? '50%' : '0%' }"
        >
          ★
        </span>
      </div>
    </div>
  </template>
  

<script>
export default{
    name:'RatingStar',
    props: {
    productRate: {
      type: Number,
      required: true,
      default: 0,
    },
  },
}
</script>

<style scoped>

.star {
  position: relative;
  display: inline-block;
  font-size: 15px;
}

.star .empty {
  color: lightgray;
}

.star .filled {
  position: absolute;
  top: 0;
  left: 0;
  color: gold; 
  overflow: hidden;
  height: 100%;
  display: inline-block;
  width: 0%;
  transition: width 0.3s ease;
}
</style>
