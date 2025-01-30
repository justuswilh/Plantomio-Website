<!-- components/ProductDetail.vue -->
<script setup lang="ts">
import type { Product, Variant } from '~/types'
import { useRuntimeConfig } from 'nuxt/app'

const props = defineProps<{
  product: Product
}>()

const config = useRuntimeConfig()

function getImageUrl(url: string): string {
  if (url.startsWith('http')) {
    return url
  }
  // Annahme: Die API liefert relative Pfade für Bilder
  return `${config.public.medusaApiUrl}${url}`
}

function formatPrice(amount: number): string {
  return `${(amount / 100).toFixed(2)}`
}

function getVariantPrice(variant: Variant): number | null {
  return props.product.price || null
}
</script>

<template>
  <div class="product-detail">
    <div class="images">
      <!-- <img
        v-for="image in product.images"
        :key="image.id"
        :src="getImageUrl(image.url)"
        :alt="product.title"
        class="image"
      > -->
      <img src="https://placehold.co/600x400" alt="Platzhalterbild">
    </div>
    <div class="details">
      <h1>{{ product.title }}</h1>
      <p v-if="product.subtitle" class="subtitle">
        {{ product.subtitle }}
      </p>
      <p class="description">
        {{ product.description }}
      </p>

      <!-- <div v-if="product.options.length" class="options">
        <h3>Optionen:</h3>
        <div v-for="option in product.options" :key="option.id" class="option">
          <strong>{{ option.title }}:</strong>
          <span v-for="value in option.values" :key="value.id" class="option-value">
            {{ value.value }}
          </span>
        </div>
      </div> -->

      <!-- <div v-if="product.variants.length" class="variants">
        <h3>Varianten:</h3>
        <ul>
          <li v-for="variant in product.variants" :key="variant.id" class="variant">
            <div class="variant-title">
              {{ variant.title }}
            </div>
            <div class="variant-sku">
              SKU: {{ variant.sku }}
            </div>
            <div class="variant-price">
              Preis:
              <span v-if="getVariantPrice(variant)">
                {{ formatPrice(getVariantPrice(variant)) }}€
              </span>
              <span v-else>
                Preis nicht verfügbar
              </span>
            </div>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  display: flex;
  gap: 40px;
}

.images {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.image {
  width: 25%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.details {
  flex: 2;
}

h1 {
  font-size: 2.2cap;
  font-weight: 750;
  color: green;
}

.subtitle {
  font-size: 1.8cap;
  font-weight: 500;
}

.description {
  margin: 10px 0;
  font-size: 1.6cap;
}

.options, .variants {
  margin-top: 20px;
}

.option {
  margin-bottom: 10px;

}

.option-value {
  display: inline-block;
  margin-right: 10px;
  background-color: #f5f5f5;
  padding: 5px 10px;
  border-radius: 4px;
}

.variant {
  margin-bottom: 10px;
}

.variant-title {
  font-weight: bold;
}

.variant-sku, .variant-price {
  margin-left: 10px;
}
</style>
