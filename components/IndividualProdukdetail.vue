 <!-- components/IndividualProdukdetail.vue  -->
<script setup lang="ts">
import { useRoute } from '#imports'
import { computed } from 'vue'
// import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * Beispiel 1:
 * Wir gehen hier einfach auf den path (z.B. '/', '/products', '/about') und
 * erstellen daraus einen berechneten Wert, der den Inhalt bestimmt.
 */
const currentContent = computed(() => {
  switch (route.path) {
    case '/produkte/smartplug':
      return ''
    default:
      return ''
  }
})
</script>

<template>
  <div>
    <!-- Beispiel 2: v-if / v-else-if direkt im Template -->
    <div v-if="route.path === '/produkte/smartplug'">
      <p>{{ currentContent }}</p>
    </div>
    <div v-else-if="route.path === '/products'">
      <h2>Produkte</h2>
      <p>Hier findest du die Produktübersicht.</p>
    </div>
    <div v-else>
      <p>{{ currentContent }}</p>
    </div>
  </div>
</template>
