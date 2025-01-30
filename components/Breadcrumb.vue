<!-- components/Breadcrumb.vue -->
<script setup lang="ts">
import type { Product } from '~/types'
import { useRoute } from '#imports' // Nuxt 3: Zugriff auf die aktuelle Route
import { computed } from 'vue'

const props = defineProps<{
  product: Product
}>()

const route = useRoute()

/**
 * Anhand der aktuellen Route wird bestimmt, welche Items im Breadcrumb erscheinen.
 * Du kannst hier beliebig viele Pfade abfragen und verschiedene Items zurückgeben.
 */
const items = computed(() => {
  // Beispiel: Abhängig vom Path unterschiedliche Item-Arrays
  switch (route.path) {
    case '/produkte/plantcare-bundle':
      return [
        {
          label: 'Bundle',
          to: '/bundle',
        },
        {
          label: props.product.title,
        },
      ]

    default:
      // Falls der Pfad nicht erfasst ist, eine generische Breadcrumb-Navigation zurückgeben
      return [
        {
          label: 'Produkte',
          to: '/produkte',
        },
        {
          label: props.product.title,
        },
      ]
  }
})
</script>

<template>
  <!-- Nutzt die Nuxt UI-Komponente UBreadcrumb -->
  <UBreadcrumb :items="items" />
</template>

<style scoped>
/* Eigene Styles (optional) */
</style>
