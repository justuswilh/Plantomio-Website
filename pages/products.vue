<!-- pages/products.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import { useProducts } from '~/composables/useProducts'

const { products, error, isLoading, fetchProducts } = useProducts()

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div>
    <h1>Produkte</h1>
    <div v-if="isLoading">
      Lade Produkte...
    </div>
    <div v-else-if="error">
      Fehler beim Laden der Produkte: {{ error.message }}
    </div>
    <div v-else>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
/* Optional: Füge hier deine Stile hinzu */
</style>
