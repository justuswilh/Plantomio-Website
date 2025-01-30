<!-- pages/products/[handle].vue -->
<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/Breadcrumb.vue'
import ProductCard from '~/components/ProductCard.vue'
import ProductDetail from '~/components/ProductDetail.vue'
import { useProduct } from '~/composables/useProduct'
import { useRelatedProducts } from '~/composables/useRelatedProducts'

definePageMeta({
  layout: 'shop', // hier den Dateinamen ohne .vue
})

const route = useRoute()
const productHandle = route.params.handle as string

console.log('Route params:', route.params) // Debugging

const { product, error, isLoading, fetchProduct } = useProduct(productHandle)
const { relatedProducts, error: relatedError, isLoading: relatedLoading, fetchRelatedProducts } = useRelatedProducts()

onMounted(() => {
  fetchProduct()
})

watch(product, (newProduct) => {
  console.log('New product:', newProduct) // Debugging
  if (newProduct) {
    // Abrufen verwandter Produkte basierend auf Tags
    fetchRelatedProducts(newProduct.tags)

    // Dynamische Meta-Tags setzen
    useHead({
      title: newProduct.title,
      meta: [
        {
          name: 'description',
          content: newProduct.description,
        },
        {
          property: 'og:title',
          content: newProduct.title,
        },
        {
          property: 'og:description',
          content: newProduct.description,
        },
        {
          property: 'og:image',
          content: newProduct.images[0]?.url || '',
        },
      ],
    })
  }
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading">
      Lade Produkt...
    </div>
    <div v-else-if="error" class="error">
      Fehler beim Laden des Produkts: {{ error.message }}
    </div>
    <div v-else-if="product" class="product-detail">
      <Breadcrumb :product="product" />
      <ProductDetail :product="product" />
      <div v-if="relatedProducts.length" class="related-products">
        <h3>Ähnliche Produkte</h3>
        <ProductCard
          v-for="relatedProduct in relatedProducts"
          :key="relatedProduct.id"
          :product="relatedProduct"
          :show-details="false"
        />
      </div>
    </div>
    <div v-else class="not-found">
      Produkt nicht gefunden.
    </div>
  </div>
</template>

<style scoped>
.loading, .error, .not-found {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2em;
}

.product-detail {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-products {
  margin-top: 40px;
}
</style>
