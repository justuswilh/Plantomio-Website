import type { HttpTypes } from '@medusajs/types'
// composables/useProduct.ts
import { computed, ref } from 'vue'
import { useProducts } from './useProducts'

export function useProduct(id: string, regionId: string) {
  const { fetchProduct, isLoading, error } = useProducts()
  const product = ref<HttpTypes.StoreProduct | null>(null)
  const selectedOptions = ref<Record<string, string>>({})

  const loadProduct = async () => {
    const data = await fetchProduct(id, regionId)
    if (data) {
      product.value = data
    }
  }

  // Berechne die ausgewählte Variante
  const selectedVariant = computed(() => {
    if (
      !product.value?.variants
      || !product.value.options
      || Object.keys(selectedOptions.value).length !== product.value.options.length
    ) {
      return undefined
    }

    return product.value.variants.find(variant =>
      variant.options?.every(optionValue =>
        optionValue.value === selectedOptions.value[optionValue.option_id!],
      ),
    )
  })

  // Sortiere die Varianten nach Preis, falls keine Variante ausgewählt ist
  const selectedVariantPrice = computed(() => {
    if (selectedVariant.value) {
      return selectedVariant.value
    }

    return product.value?.variants?.sort((a, b) =>
      a.calculated_price.calculated_amount - b.calculated_price.calculated_amount,
    )[0]
  })

  // Formatiere den Preis entsprechend der Region
  const price = computed(() => {
    if (!selectedVariantPrice.value) {
      return undefined
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.value?.region?.currency_code || 'USD',
    }).format(selectedVariantPrice.value.calculated_price.calculated_amount)
  })

  return {
    product,
    isLoading,
    error,
    selectedOptions,
    selectedVariant,
    selectedVariantPrice,
    price,
    loadProduct,
  }
}
