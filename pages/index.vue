<template>
  <div class="relative">
    <!-- Initiales Overlay -->
    <div
      v-if="showOverlay"
      class="fixed inset-0 bg-black z-40"
    ></div>

    <!-- Scroll Overlay -->
    <div
      v-if="showScrollOverlay"
      class="fixed inset-0 bg-white z-30"
    ></div>

    <!-- Zentrales Textelement -->
    <div
      v-if="currentCentralText"
      class="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
    >
      <h1 class="text-black text-4xl sm:text-5xl lg:text-8xl font-bold">
        {{ currentCentralText }}
      </h1>
    </div>

    <!-- Hauptinhalt der Seite mit Slide-In Animation -->
    <div
      :class="['main-content', { 'visible': !showOverlay }, 'flex flex-col items-center justify-center min-h-screen']"
    >
      <div v-if="data" class="w-full">
        <!-- Picture -->
        <section 
          v-if="picture.length" 
          ref="pictureSection" 
          :style="{ transform: pictureTransform }" 
          class="flex justify-center h-screen pt-2 sm:pt-20 lg:pt-48 w-full relative overflow-hidden"
        >
          <ASTRenderer 
            :nodes="picture" 
            class="w-content max-w-md sm:max-w-lg lg:max-w-xl mx-auto items-center object-cover sm:object-contain text-base sm:text-lg lg:text-xl" 
          />
        </section>

        <!-- Effekt 1 -->
        <section 
          class="flex flex-col justify-center w-full"
        >
          <div 
            class="text-center content-center items-center align-middle text-4xl sm:text-5xl lg:text-6xl font-bold relative"
            ref="smarthomeSection"
          >
            SMARTHOME
          </div>
          <div 
            class="text-center mt-60 content-center text-4xl text-white sm:text-5xl lg:text-6xl font-bold relative"
            ref="trifftSection"
          >
            TRIFFT
          </div>
          <div 
            class="text-center mt-60 content-center text-4xl text-white sm:text-5xl lg:text-6xl font-bold relative"
            ref="botanikMarkerSection"
          >
            BOTANIK_MARKER
          </div>
          <div 
            class="text-center mt-60 content-center text-4xl sm:text-5xl lg:text-8xl font-bold relative"
            ref="botanikSection"
          >
            BOTANIK
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

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
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

// Overlay States
const showOverlay = ref(true)
const showScrollOverlay = ref(false) // Zustand für Scroll-Overlay

// Central Text State
const currentCentralText = ref(null) // Neuer Zustand für zentralen Text

// Refs für die beobachteten Abschnitte
const smarthomeSection = ref(null)
const trifftSection = ref(null)
const botanikMarkerSection = ref(null)
const botanikSection = ref(null)
const pictureSection = ref(null) // Hinzugefügt

// Transformation für das Bild
const pictureTransform = ref('translateY(0px)') // Hinzugefügt

// Flags, um Mehrfach-Logs zu verhindern
const smarthomeLogged = ref(false)
const trifftLogged = ref(false)
const botanikMarkerLogged = ref(false)
const botanikLogged = ref(false)

// Funktion zum Überprüfen der Position der Elemente
function checkPositions() {
  const viewportCenter = window.scrollY + window.innerHeight / 2

  // Berechnung der Positionen der Mittelpunkte der Sektionen
  let smarthomeCenter = 0
  let trifftCenter = 0
  let botanikMarkerCenter = 0
  let botanikCenter = 0

  if (smarthomeSection.value) {
    const rect = smarthomeSection.value.getBoundingClientRect()
    smarthomeCenter = window.scrollY + rect.top + rect.height / 2
  }

  if (trifftSection.value) {
    const rect = trifftSection.value.getBoundingClientRect()
    trifftCenter = window.scrollY + rect.top + rect.height / 2
  }

  if (botanikMarkerSection.value) {
    const rect = botanikMarkerSection.value.getBoundingClientRect()
    botanikMarkerCenter = window.scrollY + rect.top + rect.height / 2
  }

  if (botanikSection.value) {
    const rect = botanikSection.value.getBoundingClientRect()
    botanikCenter = window.scrollY + rect.top + rect.height / 2
  }

  // Logik zur Anzeige des Scroll-Overlays bis Botanik erreicht ist
  if (viewportCenter > smarthomeCenter && viewportCenter < botanikCenter) {
    if (!showScrollOverlay.value) {
      console.log('Scroll Overlay wird angezeigt.')
      showScrollOverlay.value = true
    }
  } else {
    if (showScrollOverlay.value) {
      console.log('Scroll Overlay wird ausgeblendet.')
      showScrollOverlay.value = false
    }
  }

  // Logik zum Setzen des zentralen Texts
  if (viewportCenter >= smarthomeCenter && viewportCenter < trifftCenter) {
    if (currentCentralText.value !== 'SMARTHOME') {
      console.log('Zentraler Text: SMARTHOME')
      currentCentralText.value = 'SMARTHOME'
    }
  } else if (viewportCenter >= trifftCenter && viewportCenter < botanikMarkerCenter) {
    if (currentCentralText.value !== 'TRIFFT') {
      console.log('Zentraler Text: TRIFFT')
      currentCentralText.value = 'TRIFFT'
    }
  } else if (viewportCenter >= botanikMarkerCenter && viewportCenter < botanikCenter) {
    if (currentCentralText.value !== 'BOTANIK') {
      console.log('Zentraler Text: BOTANIK')
      currentCentralText.value = 'BOTANIK'
    }
  } else {
    // Außerhalb der definierten Bereiche den zentralen Text entfernen
    if (currentCentralText.value !== null) {
      console.log('Zentraler Text entfernt.')
      currentCentralText.value = null
    }
  }

  // Logik zum Loggen, wenn SMARTHOME in der Mitte ist
  if (!smarthomeLogged.value && Math.abs(viewportCenter - smarthomeCenter) <= 10) {
    console.log('SMARTHOME ist jetzt in der Bildschirmmitte.')
    smarthomeLogged.value = true
  } else if (smarthomeLogged.value && viewportCenter < smarthomeCenter - 10) {
    smarthomeLogged.value = false
  }

  // Logik zum Loggen, wenn TRIFFT in der Mitte ist
  if (!trifftLogged.value && Math.abs(viewportCenter - trifftCenter) <= 10) {
    console.log('TRIFFT ist jetzt in der Bildschirmmitte.')
    trifftLogged.value = true
  } else if (trifftLogged.value && viewportCenter < trifftCenter - 10) {
    trifftLogged.value = false
  }

  // Logik zum Loggen, wenn BOTANIK_MARKER in der Mitte ist
  if (!botanikMarkerLogged.value && Math.abs(viewportCenter - botanikMarkerCenter) <= 10) {
    console.log('BOTANIK_MARKER ist jetzt in der Bildschirmmitte.')
    botanikMarkerLogged.value = true
  } else if (botanikMarkerLogged.value && viewportCenter < botanikMarkerCenter - 10) {
    botanikMarkerLogged.value = false
  }

  // Logik zum Loggen, wenn BOTANIK in der Mitte ist
  if (!botanikLogged.value && Math.abs(viewportCenter - botanikCenter) <= 10) {
    console.log('BOTANIK ist jetzt in der Bildschirmmitte.')
    botanikLogged.value = true

    // Overlay und zentralen Text ausblenden
    if (showScrollOverlay.value) {
      showScrollOverlay.value = false
      console.log('Scroll Overlay wird ausgeblendet.')
    }

    if (currentCentralText.value !== null) {
      currentCentralText.value = null
      console.log('Zentraler Text entfernt.')
    }
  } else if (botanikLogged.value && viewportCenter > botanikCenter + 10) {
    botanikLogged.value = false
  }

  // Transformation für das Bild anwenden
  if (pictureSection.value) {
    const scrollY = window.scrollY
    const transformValue = `translateY(-${scrollY * 1}px)`
    pictureTransform.value = transformValue
  }
}

// Throttling mit requestAnimationFrame
let ticking = false
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkPositions()
      ticking = false
    })
    ticking = true
  }
}

onMounted(async () => {
  await nextTick() // Sicherstellen, dass DOM gerendert ist

  // Initialer Overlay-Delay
  setTimeout(() => {
    showOverlay.value = false
  }, 40) // 1.2 Sekunden Verzögerung, um den Overlay ausblenden zu sehen

  // Initiale Positionsüberprüfung
  checkPositions()

  // Scroll-Listener hinzufügen
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onScroll) // Optional: Überprüfen bei Größenänderung
})

onBeforeUnmount(() => {
  // Scroll-Listener entfernen
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
/* Entferne alle Fade-Transition Styles */

/* Main content slide-in transition */
.main-content {
  opacity: 0;
  transform: translateY(70px);
  transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;
}

.main-content.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Glatte Transformation für das Bild */
section[ref="pictureSection"] {
  transition: transform 0.1s linear;
}
</style>
