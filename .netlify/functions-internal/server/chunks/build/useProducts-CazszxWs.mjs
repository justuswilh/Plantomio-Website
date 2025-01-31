import { ref } from 'vue';
import { t as useRuntimeConfig } from './server.mjs';

function useProducts() {
  const products = ref([]);
  const error = ref(null);
  const isLoading = ref(false);
  const fetchProducts = async () => {
    isLoading.value = true;
    try {
      const config = useRuntimeConfig();
      console.log("Medusa API URL:", config.public.medusaApiUrl);
      console.log("Medusa Publishable Key:", config.public.medusaPublishableKey);
      const response = await $fetch(`${config.public.medusaApiUrl}/store/products`, {
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey
        },
        credentials: "include"
      });
      products.value = response.products;
    } catch (err) {
      error.value = err;
      console.error("Fehler beim Laden der Produkte:", err);
    } finally {
      isLoading.value = false;
    }
  };
  return { products, error, isLoading, fetchProducts };
}

export { useProducts as u };
//# sourceMappingURL=useProducts-CazszxWs.mjs.map
