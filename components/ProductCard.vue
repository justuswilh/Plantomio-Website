<!-- components/ProduktCard.vue -->
<script setup lang="ts">
import { defineProps } from 'vue'

interface OptionValue {
  id: string
  value: string
  option_id: string
  metadata: any
  created_at: string
  updated_at: string
  deleted_at: string | null
}

interface Option {
  id: string
  title: string
  product_id: string
  metadata: any
  created_at: string
  updated_at: string
  deleted_at: string | null
  values: OptionValue[]
}

interface Image {
  id: string
  url: string
  metadata: any
  created_at: string
  updated_at: string
  deleted_at: string | null
}

interface Price {
  amount: number
  currency_code: string
}

interface VariantOption {
  id: string
  value: string
  option_id: string
  option: {
    id: string
    title: string
    product_id: string
    metadata: any
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
  metadata: any
  created_at: string
  updated_at: string
  deleted_at: string | null
}

interface Variant {
  id: string
  title: string
  sku: string
  barcode: string | null
  ean: string | null
  upc: string | null
  allow_backorder: boolean
  manage_inventory: boolean
  hs_code: string | null
  origin_country: string | null
  mid_code: string | null
  material: string | null
  weight: string | null
  length: string | null
  height: string | null
  width: string | null
  metadata: any
  variant_rank: number
  product_id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  options: VariantOption[]
  prices?: Price[] // Annahme: Preise sind unter den Varianten verfügbar
}

interface Product {
  id: string
  title: string
  subtitle: string | null
  description: string
  handle: string
  is_giftcard: boolean
  discountable: boolean
  thumbnail: string
  collection_id: string | null
  type_id: string | null
  weight: string
  length: string | null
  height: string | null
  width: string | null
  hs_code: string | null
  origin_country: string | null
  mid_code: string | null
  material: string | null
  created_at: string
  updated_at: string
  type: any
  collection: any
  options: Option[]
  tags: string[]
  images: Image[]
  variants: Variant[]
}

const props = defineProps<{
  product: Product
}>()

function formatPrice(amount: number): string {
  return `${(amount / 100).toFixed(2)}`
}
</script>

<template>
  <div class="product-card">
    <div class="product-images">
      <img
        v-for="image in product.images"
        :key="image.id"
        :src="image.url"
        :alt="product.title"
        class="product-image"
      >
    </div>
    <div class="product-details">
      <h2>{{ product.title }}</h2>
      <p v-if="product.subtitle" class="product-subtitle">
        {{ product.subtitle }}
      </p>
      <p class="product-description">
        {{ product.description }}
      </p>

      <div v-if="product.options && product.options.length" class="product-options">
        <h3>Optionen:</h3>
        <div v-for="option in product.options" :key="option.id" class="option">
          <strong>{{ option.title }}:</strong>
          <span v-for="value in option.values" :key="value.id" class="option-value">
            {{ value.value }}
          </span>
        </div>
      </div>

      <div v-if="product.variants && product.variants.length" class="product-variants">
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
              <span v-if="variant.prices && variant.prices.length">
                {{ formatPrice(variant.prices[0].amount) }}€
              </span>
              <span v-else>
                Preis nicht verfügbar
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.product-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.product-details {
  flex: 2;
  margin-left: 20px;
}

.product-subtitle {
  color: #666;
  font-style: italic;
}

.product-description {
  margin: 10px 0;
}

.product-options, .product-variants {
  margin-top: 15px;
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
