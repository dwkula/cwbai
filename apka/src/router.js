import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Products from './components/Products.vue'
import Basket from './components/Basket.vue'
import ProductDetails from  './components/ProductDetails.vue'



export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
  ]
})