<template>
  <div>
      <h1>Basket</h1>
      <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Summary</th>
            <th>Add/Remove</th>
          </tr>
          <tr v-for="p in filteredProducts" :key="p.id">
              <td>{{ p.name }}</td>
              <td>{{ p.price }}</td>
              <td>{{ p.quantity }}</td>
              <td>{{ p.quantity*p.price }}</td>
              <td>
              <button style="width:50%" @click="p.quantity = increaseAmount(p.quantity, p.price)"><b>+</b></button> 
              <button v-show="p.quantity > 0" style="width:50%" @click="p.quantity = decreaseAmount(p.quantity, p.price)"><b>-</b></button>
              </td>
          </tr>
      </table>
      <p>Basket value: {{ basketSum.combinedValue }}</p>
  </div>
</template>

<script setup>
    import products from '../data.js'
    import basketSum from '../basketSum.js'
    import { computed, ref } from 'vue'

    const filteredProducts = computed(() => products.value.filter(p => p.quantity > 0))

    function decreaseAmount (quantity, price) {
      quantity -= 1

      basketSum.combinedValue -= price

      return quantity
    }

    function increaseAmount (quantity, price) {
      quantity += 1

      basketSum.combinedValue += price
      
      return quantity
    }
</script>