<script setup lang="ts">
import { refCart, count, total, removeFromCart } from '@/models/shoppingCart'

const cart = refCart()
</script>

<template>
  <div class="cart">
    <h1 class="title">Shopping Cart</h1>
    <div v-if="cart.length === 0">
      <p>Your cart is empty</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.product.id" class="item">
        <img :src="item.product.thumbnail" :alt="item.product.title" />
        <button class="button" @click="removeFromCart(item.product)" style="float: right">
          <i class="fa-trash fas has-text-danger"></i>
        </button>
        <div>{{ item.product.title }}</div>
        <div>
          {{ item.product.price }} * {{ item.quantity }} = ${{
            (item.product.price * item.quantity).toFixed(2)
          }}
        </div>
      </div>
      <div>
        <h3>Total: {{ count }} items = ${{ total.toFixed(2) }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 1rem;
  overflow-y: auto;
}
.cart img {
  width: 50px;
  height: 50px;
  float: left;
}
.item {
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px ridge #ccc;
}
</style>
