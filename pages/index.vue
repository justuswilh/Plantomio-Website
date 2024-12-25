<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import ASTRenderer from '~/components/ASTRenderer.vue' // Pfad anpassen
import { useAsyncData } from 'nuxt/app' // Beispiel-Import, anpassen je nach Setup

// Asynchrone Daten laden
const { data, pending, error } = await useAsyncData('content', () => queryContent('home').findOne())

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

// Overlay State
const showOverlay = ref(true)

// Nach dem Mounten das Overlay ausblenden und Inhalt animieren
onMounted(() => {
  // Minimaler Delay, um sicherzustellen, dass das Overlay gerendert wird
  setTimeout(() => {
    showOverlay.value = false
  }, 10) // 10ms Verzögerung
})

// Optional: Debugging Logs
watch(data, (newData) => {
  if (newData.value) {
    console.log('Daten geladen:', newData.value)
    console.log('Body-Inhalt:', newData.value.body)
  }
})
</script>

<template>
  <div class="relative">
    <!-- Overlay -->
    <transition name="fade">
      <div
        v-if="showOverlay"
        class="fixed inset-0 bg-black z-50"
      ></div>
    </transition>

    <!-- Hauptinhalt der Seite mit Slide-In Animation -->
    <div
      :class="['main-content', { 'visible': !showOverlay }, 'flex flex-col items-center justify-center min-h-screen']"
    >
      <div v-if="data" class="w-full">
        <!-- Picture -->
        <section v-if="picture.length" class="flex justify-center h-screen mt-2 sm:mt-2 lg:mt-40 w-full">
          <ASTRenderer 
            :nodes="picture" 
            class="w-content max-w-md sm:max-w-lg lg:max-w-xl mx-auto items-center object-cover sm:object-contain text-base sm:text-lg lg:text-xl" 
          />
        </section>

        <!-- Effekt 1 -->
        <section class="flex flex-col justify-center w-full bg-gray-100">
          <div class="text-center content-center items-center align-middle text-4xl sm:text-5xl h-screen lg:text-6xl font-bold">
            SMARTHOME
          </div>
          <div class="h-screen flex flex-col">
            <div class="text-center h-1/2 content-center text-4xl sm:text-5xl lg:text-6xl font-bold">
            TRIFFT
            </div>
            <div class="text-center h-1/2 content-center text-4xl sm:text-5xl lg:text-6xl font-bold">
            BOTANIK
            </div>
          </div>
        </section>

        <!-- Hauptinhalt -->
        <section v-if="hauptinhalt.length" class="flex h-screen flex-col items-center justify-center mt-8 sm:mt-12 lg:mt-16">
          <ASTRenderer 
            :nodes="hauptinhalt" 
            class="w-full max-w-2xl mx-auto sm:mx-0 text-center font-semibold text-2xl sm:text-3xl lg:text-4xl" 
          />
        </section>

      </div>

      <!-- Ladezustand und Fehler anzeigen -->
      <div v-if="pending" class="text-center mt-6 sm:mt-8 text-lg sm:text-xl">Lade...</div>
      <div v-if="error" class="text-center mt-4 text-red-500 text-base sm:text-lg">
        Fehler: {{ error.message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Overlay fade transition */
.fade-leave-active {
  transition: opacity 1.2s ease-in-out;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

/* Main content slide-in transition */
.main-content {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
}

.main-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Text and Image Adjustments */
@media (min-width: 640px) { /* sm */
  .main-content {
    /* Zusätzliche Styles für kleine Bildschirme */
  }
}

@media (min-width: 768px) { /* md */
  .main-content {
    /* Zusätzliche Styles für mittlere Bildschirme */
  }
}

@media (min-width: 1024px) { /* lg */
  .main-content {
    /* Zusätzliche Styles für große Bildschirme */
  }
}

@media (min-width: 1280px) { /* xl */
  .main-content {
    /* Zusätzliche Styles für extra große Bildschirme */
  }
}
</style> 
