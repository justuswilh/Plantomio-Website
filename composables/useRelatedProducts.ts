import type { Product } from '~/types'
import { useRuntimeConfig } from '#imports'
// composables/useRelatedProducts.ts
import { ref } from 'vue'

export function useRelatedProducts(currentProductId: string) {
  const relatedProducts = ref<Product[]>([])
  const error = ref<Error | null>(null)
  const isLoading = ref<boolean>(false)

  const fetchRelatedProducts = async (tags: string[]) => {
    if (!tags.length)
      return

    isLoading.value = true
    try {
      const config = useRuntimeConfig()
      const response = await $fetch(`${config.public.medusaApiUrl}/store/products`, {
        headers: {
          'x-publishable-api-key': config.public.medusaPublishableKey,
        },
        params: { tags: tags.join(',') }, // Passen Sie die Parameter entsprechend Ihrer API an
        credentials: 'include',
      })

      // Filtern Sie das aktuelle Produkt aus den verwandten Produkten
      relatedProducts.value = response.products.filter((p: Product) =>
        p.id !== currentProductId && p.tags.some(tag => tags.includes(tag)),
      )
    }
    catch (err) {
      error.value = err as Error
      console.error('Fehler beim Laden der verwandten Produkte:', err)
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    relatedProducts,
    error,
    isLoading,
    fetchRelatedProducts,
  }
}
