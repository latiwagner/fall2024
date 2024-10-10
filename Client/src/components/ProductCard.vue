<script setup lang="ts">
import type { Product } from '@/models/products'

const props = defineProps<[product: Product]>()
</script>

<template>
  <div class="box">
    <div class="box-image">
      <img :src="Product.image" alt="product.name" />
    </div>
    <div class="box-content">
      <h3>{{ Product.title }}</h3>
      <p>{{ Product.description }}</p>
      <p>{{ Product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
