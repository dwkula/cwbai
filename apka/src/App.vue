<template>
  <div>
    <router-link :to="{name:'Home'}">Homepage</router-link>&nbsp;
    <router-link :to="{name:'Products'}">Products</router-link>&nbsp;
    <router-link :to="{name:'Basket'}">Basket</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>


<style>
</style>