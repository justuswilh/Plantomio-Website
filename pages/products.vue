<!-- pages/products.vue -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useProducts } from '~/composables/useProducts'

const { products, error, isLoading, fetchProducts } = useProducts()

function formatPrice(amount: number) {
  return (amount / 100).toFixed(2)
}

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
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }}
          <span v-if="product.variants && product.variants.length > 0">
            -
            <span v-if="product.variants[0].prices && product.variants[0].prices.length > 0">
              {{ formatPrice(product.variants[0].prices[0].amount) }}€
            </span>
            <span v-else>
              Preis nicht verfügbar
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

  <style scoped>
  /* Optional: Füge hier deine Stile hinzu */
  </style>
