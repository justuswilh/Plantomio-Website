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
const einleitung = computed(() => extractSection(data.value?.body, 'Einleitung'))
const hauptinhalt = computed(() => extractSection(data.value?.body, 'Hauptinhalt'))
const fazit = computed(() => extractSection(data.value?.body, 'Fazit'))
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
      <h1>{{ data.title }}</h1>

      <!-- Einleitung -->
      <section v-if="einleitung.length">
        <h2>Einleitung</h2>
        <ASTRenderer :nodes="einleitung" />
      </section>

      <!-- Hauptinhalt -->
      <section v-if="hauptinhalt.length">
        <h2>Hauptinhalt</h2>
        <ASTRenderer :nodes="hauptinhalt" />
      </section>

      <!-- Fazit -->
      <section v-if="fazit.length">
        <h2>Fazit</h2>
        <ASTRenderer :nodes="fazit" />
      </section>

      <!-- Picture -->
      <section v-if="picture.length">
        <h2>Picture</h2>
        <ASTRenderer :nodes="picture" />
      </section>
    </div>

    <!-- Ladezustand und Fehler anzeigen -->
    <div v-if="pending">Lade...</div>
    <div v-if="error">Fehler: {{ error.message }}</div>
  </div>
</template>
