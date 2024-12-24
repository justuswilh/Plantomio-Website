<script setup>
import { computed, watch } from 'vue'
import ASTRenderer from '~/components/ASTRenderer.vue' // Pfad anpassen
import { useAsyncData } from 'nuxt/app' // Beispiel-Import, anpassen je nach Setup

// Asynchrone Daten laden
const { data, pending, error } = await useAsyncData('waitingpage', () => queryContent('waitingpage').findOne())

// Funktion zum Extrahieren einer Sektion basierend auf der Überschrift
function extractSection(body, sectionTitle) {
  if (!body || !body.children) return []

  const sections = {}
  let currentSection = null

  body.children.forEach(node => {
    if (node.type === 'element' && node.tag === 'h2') {
      const title = node.children[0].value
      currentSection = title
      sections[currentSection] = []
    } else if (currentSection) {
      sections[currentSection].push(node)
    }
  })

  return sections[sectionTitle] || []
}

// Computed Properties für jede Sektion
const hauptinhalt = computed(() => extractSection(data.value?.body, 'Hauptinhalt'))
const picture = computed(() => extractSection(data.value?.body, 'Picture'))

// Optional: Debugging Logs
watch(data, (newData) => {
  if (newData.value) {
    console.log('Daten geladen:', newData.value)
    console.log('Body-Inhalt:', newData.value.body)
  }
})
</script>

<template>
  <div>
    <div v-if="data">
      <!-- Picture -->
      <section v-if="picture.length" class="flex mt-28 justify-center">
        <ASTRenderer :nodes="picture" />
      </section>

      <!-- Hauptinhalt -->
      <section v-if="hauptinhalt.length" class="flex mt-24 justify-center text-3xl">
        <ASTRenderer :nodes="hauptinhalt" />
      </section>
    </div>

    <!-- Ladezustand und Fehler anzeigen -->
    <div v-if="pending">Lade...</div>
    <div v-if="error">Fehler: {{ error.message }}</div>
  </div>
</template>
