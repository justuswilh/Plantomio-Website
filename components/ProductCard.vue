<!-- components/ProductCard.vue -->
<script setup lang="ts">
import type { Product, Variant } from '~/types'
import { useRuntimeConfig } from '#imports'

const props = defineProps<{
  product: Product
  showDetails?: boolean
}>()

const config = useRuntimeConfig()

/**
 * Formatiert den Preis von Cent in Euro.
 * @param amount - Der Preis in Cent.
 * @returns Der formatierte Preis in Euro.
 */
function formatPrice(amount: number): string {
  return `${(amount / 100).toFixed(2)}€`
}

/**
 * Gibt den Preis einer Variante zurück.
 * @param variant - Die Produktvariante.
 * @returns Der Preis der Variante oder null, falls nicht verfügbar.
 */
function getVariantPrice(variant: Variant): number | null {
  // Stellen Sie sicher, dass die Variante ein price Feld hat
  return variant.price || null
}

/**
 * Generiert die vollständige Bild-URL.
 * @param url - Die Bild-URL aus der API.
 * @returns Die vollständige Bild-URL.
 */
function getImageUrl(url: string): string {
  if (url.startsWith('http')) {
    return url
  }
  // Falls die URL relativ ist, fügen Sie die Medusa API URL hinzu
  return `${config.public.medusaApiUrl}${url}`
}
</script>

<template>
  <NuxtLink v-if="!showDetails && product.handle" :to="`/produkte/${encodeURIComponent(product.handle)}`" class="product-link">
    <div class="product-card">
      <div class="product-images">
        <!-- <img
          v-for="image in product.images"
          :key="image.id"
          :src="getImageUrl(image.url)"
          :alt="product.title"
          class="product-image"
        > -->
        <img src="https://placehold.co/600x400" alt="Platzhalterbild">
      </div>
      <div class="product-details">
        <h2>{{ product.title }}</h2>
        <p v-if="product.subtitle" class="subtitle">
          {{ product.subtitle }}
        </p>
        <p class="description">
          {{ product.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  max-height: 560px;
}

.product-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.product-details {
  margin-top: 20px;
}

.product-description {
  margin: 10px 0;
}

.variant {
  margin-bottom: 10px;
}

.variant-title {
  font-weight: bold;
}

h2 {
  font-size: 1.9cap;
  font-weight: 700;
  color: green;
}

.subtitle {
  font-size: 1.7cap;
  font-weight: 500;
}

.description {
  margin: 2px 0 0 0;
  font-size: 1.5cap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: clip;
  word-break: normal;
}
</style>
