<script setup lang="ts">
const items = ref([
  {
    title: 'Interne Entwicklung',
    description: 'Erfolgreich abgeschlossen',
    icon: 'i-lucide-house',
  },
  {
    title: 'Closed Beta',
    description: 'Beta Testphase mit ausgewählten Nutzern',
    icon: 'i-material-symbols:lock-outline',
  },
  {
    title: 'Open Beta',
    description: 'Beta Testphase offen für alle',
    icon: 'i-material-symbols:lock-open-right-outline',
  },
  {
    title: 'Release',
    description: 'Offizielle Veröffentlichung',
    icon: 'i-material-symbols:package-2-outline',
  },
])

const active = ref(1)
</script>

<template>
  <UStepper v-model="active" :items="items" size="lg" class="w-full display" />
  <UStepper v-model="active" :items="items" orientation="vertical" class="w-full display2" />
</template>

<style scoped>
.display {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 6px 0px 6px;
}

/* class="md:pt-10 pb-2 pt-4 pl-4" */
.display2 {
  display: none;
}

@media (max-width: 768px) {
  .display {
    display: none;
  }

  .display2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 6px 0px 6px;
  }
}
</style>