<template>
  <div>
      <h1>Products</h1>
      <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
          <tr v-for="p in products" :key="p.id">
              <td>{{ p.name }}</td>
              <td>{{ p.price }}</td>
              <td><button @click="p.quantity = addProduct(p.quantity, p.price)">Add</button></td>
          </tr>
      </table>
  </div>
</template>

<script setup>
    import products from '../data.js'
    import basketSum from '../basketSum.js'

    function addProduct (quantity, price) {
      quantity += 1

      basketSum.combinedValue = basketSum.combinedValue + price

      return quantity
    }


</script>
