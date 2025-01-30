import type { Product } from '~/types'
import { useRuntimeConfig } from '#imports'
// composables/useProduct.ts
import { ref } from 'vue'

export function useProduct(productHandle: string) {
  const product = ref<Product | null>(null)
  const error = ref<Error | null>(null)
  const isLoading = ref<boolean>(false)

  const fetchProduct = async () => {
    if (!productHandle) {
      error.value = new Error('Kein Produkt-Handle angegeben.')
      return
    }

    isLoading.value = true
    try {
      const config = useRuntimeConfig()
      console.log('Medusa API URL:', config.public.medusaApiUrl)
      console.log('Medusa Publishable Key:', config.public.medusaPublishableKey)
      console.log('Suchparameter (Handle):', productHandle)

      // Abrufen des Produkts anhand des Handles
      const response = await $fetch(`${config.public.medusaApiUrl}/store/products`, {
        headers: {
          'x-publishable-api-key': config.public.medusaPublishableKey,
        },
        params: { handle: productHandle }, // Verwenden Sie 'handle' als Suchparameter
        credentials: 'include',
      })

      console.log('API Response:', response)

      // Überprüfen, ob die Antwort das erwartete Format hat
      if (!response || !Array.isArray(response.products)) {
        throw new Error('Ungültige API-Antwort: "products" nicht gefunden oder kein Array.')
      }

      console.log('Gefundene Produkte:', response.products)

      // Finden des Produkts mit exakt passendem Handle
      const matchedProduct = response.products.find(
        (p: Product) => p.handle && p.handle.toLowerCase() === productHandle.toLowerCase(),
      )

      if (matchedProduct) {
        product.value = matchedProduct
        console.log('Gefundenes Produkt:', matchedProduct)
      }
      else {
        product.value = null
        console.warn(`Kein Produkt mit dem Handle "${productHandle}" gefunden.`)
      }
    }
    catch (err) {
      error.value = err as Error
      console.error('Fehler beim Laden des Produkts:', err)
    }
    finally {
      isLoading.value = false
    }
  }

  return { product, error, isLoading, fetchProduct }
}
