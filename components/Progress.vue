<script setup lang="ts">
const items = ref([
  {
    title: 'Interne Entwicklung',
    description: 'Erfolgreich abgeschlossen',
    icon: 'i-lucide-house',
  },
  {
    title: 'Closed Beta',
    description: 'Beta-Testphase mit ausgewählten Nutzern',
    icon: 'i-material-symbols:lock-outline',
  },
  {
    title: 'Open Beta',
    description: 'Beta-Testphase offen für alle',
    icon: 'i-material-symbols:lock-open-right-outline',
  },
  {
    title: 'Release',
    description: 'Offizielle Produktveröffentlichung',
    icon: 'i-material-symbols:package-2-outline',
  },
])

const active = ref(1)
</script>

<template>
  <UStepper v-model="active" :items="items" size="lg" class="w-full" />
</template>
