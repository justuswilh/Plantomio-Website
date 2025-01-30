<!-- pages/products/index.vue -->
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import { useProducts } from '~/composables/useProducts'

definePageMeta({
  layout: 'shop', // hier den Dateinamen ohne .vue
})

const { products, error, isLoading, fetchProducts } = useProducts()

onMounted(() => {
  fetchProducts()
  console.log('Geladene Produkte:', products.value)
})

// Erlaubte Collection-Handles
const ALLOWED_HANDLES = ['bundle']

// Filtere die Produkte nach Collection.handle
const filteredProducts = computed(() =>
  products.value.filter((product) => {
    return (
      product.collection?.handle
      && ALLOWED_HANDLES.includes(product.collection.handle)
    )
  }),
)
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading">
      Lade Produkte...
    </div>
    <div v-else-if="error" class="error">
      Fehler beim Laden der Produkte: {{ error.message }}
    </div>
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        class="content"
      />
    </div>
  </div>
</template>

<style scoped>
.loading,
.error {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2em;
}

.product-grid {
  display: grid;
  gap: 4vh 6vh; /* Abstand zwischen den Grid-Elementen */
  margin: 0 auto; /* Zentrieren des Grids */
  grid-template-columns: repeat(2, 1fr); /* Standardmäßig 2 Spalten */
}

.content {
  justify-self: center;
}
</style>
