<template>
  <div class="relative flex flex-col items-center justify-center min-h-screen">
    <!-- Initiales Overlay mit Fade-Out Transition -->
    <transition name="fade">
      <div
        v-if="showOverlay"
        class="fixed inset-0 bg-black z-40"
      ></div>
    </transition>

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

    <div>
      <ShowcaseLandingpage :currentShowcase="currentShowcase" />
    </div>

    <!-- Hauptinhalt der Seite mit Slide-In Animation -->
    <div
      :class="[
        'main-content',
        { visible: !showOverlay },
        'flex flex-col items-center justify-center min-h-screen'
      ]"
    >
      <div v-if="data" class="w-full">
        <!-- Picture -->
        <section
          v-if="picture.length"
          ref="pictureSection"
          :style="{ transform: pictureTransform }"
          class="flex z-50 items-center h-screen w-full relative overflow-hidden"
        >
          <ASTRenderer
            :nodes="picture"
            class="w-content max-w-md sm:max-w-lg lg:max-w-xl mx-auto items-center object-cover sm:object-contain"
          />
        </section>

        <!-- Effekt 1 -->
        <section class="flex flex-col justify-center w-full">
          <div
            class="text-center content-center items-center text-2xl sm:text-3xl lg:text-4xl font-bold relative"
            ref="questionsSection"
            :style="{ transform: questionsTransform }"
          >
            Automatische Versorgung für deine Pflanzen!<br />
            Aber wie?
          </div>
          <div
            class="text-center mt-28 invisible content-center items-center relative"
            ref="smarthomeSection"
          >
            SMARTHOME
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="trifftSection"
          >
            TRIFFT
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="botanikMarkerSection"
          >
            BOTANIK_MARKER
          </div>
          <div
            class="text-center mt-52 content-center text-4xl sm:text-5xl lg:text-8xl font-bold relative"
            ref="botanikSection"
          >
            BOTANIK
          </div>
        </section>

        <!-- Showcase-Sektionen -->
        <section class="flex flex-col justify-center w-full">
          <div
            class="text-center mt-80 content-center invisible items-center relative"
            ref="showcase1"
          >
            showcase1
          </div>
          <div
            class="text-center mt-80 content-center invisible relative"
            ref="showcase2"
          >
            showcase2
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase3"
          >
            showcase3
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase4"
          >
            showcase4
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase5"
          >
            showcase5
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase6"
          >
            showcase6
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase7"
          >
            showcase7
          </div>
          <div
            class="text-center mt-52 content-center invisible relative"
            ref="showcase8"
          >
            showcase8
          </div>
        </section>

        <!-- Hauptinhalt -->
        <section
          v-if="hauptinhalt.length"
          class="flex h-screen flex-col items-center justify-center mt-8 sm:mt-12 lg:mt-16"
        >
          <ASTRenderer
            :nodes="hauptinhalt"
            class="w-full max-w-2xl mx-auto sm:mx-0 text-center font-semibold text-2xl sm:text-3xl lg:text-4xl"
          />
        </section>
      </div>

      <!-- Ladezustand und Fehler anzeigen -->
      <div v-if="pending" class="text-center mt-6 sm:mt-8 text-lg sm:text-xl">
        Lade...
      </div>
      <div v-if="error" class="text-center mt-4 text-red-500 text-base sm:text-lg">
        Fehler: {{ error.message }}
      </div>
    </div>

    <!-- NEU: Unsere Overlay-Komponente, die das jeweilige Showcase-Bild einblendet -->
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import ASTRenderer from '~/components/ASTRenderer.vue' // Pfad anpassen
import ShowcaseLandingpage from '~/components/ShowcaseLandingpage.vue' // <-- Neu einbinden (Pfad anpassen)
import { useAsyncData } from 'nuxt/app' // Beispiel-Import, anpassen je nach Setup

// Asynchrone Daten laden (Beispiel mit Nuxt Content)
const { data, pending, error } = await useAsyncData('content', () =>
  queryContent('home').findOne()
)

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
const showOverlay = ref(true) // Initial auf true setzen, um das Overlay anzuzeigen
const showScrollOverlay = ref(false) // Zustand für Scroll-Overlay

// Central Text State
const currentCentralText = ref(null) // Neuer Zustand für zentralen Text

// Refs für die beobachteten Abschnitte
const questionsSection = ref(null)
const smarthomeSection = ref(null)
const trifftSection = ref(null)
const botanikMarkerSection = ref(null)
const botanikSection = ref(null)
const pictureSection = ref(null)

// Transformation für das Bild
const pictureTransform = ref('translateY(0px)')
// Verlangsamte Bewegung für Questions
const questionsTransform = ref('translateY(0px)')

// Flags, um Mehrfach-Logs zu verhindern (für smarthome, trifft, etc.)
const questionsSectionLogged = ref(false)
const smarthomeLogged = ref(false)
const trifftLogged = ref(false)
const botanikMarkerLogged = ref(false)
const botanikLogged = ref(false)

// Flag to check if user has scrolled
const hasScrolled = ref(false)

// Showcase-Refs
const showcase1 = ref(null)
const showcase2 = ref(null)
const showcase3 = ref(null)
const showcase4 = ref(null)
const showcase5 = ref(null)
const showcase6 = ref(null)
const showcase7 = ref(null)
const showcase8 = ref(null)
const showcase9 = ref(null)
const showcase10 = ref(null)
const showcase11 = ref(null)
const showcase12 = ref(null)
const showcase13 = ref(null)

// Showcase Logged Flags
const showcase1Logged = ref(false)
const showcase2Logged = ref(false)
const showcase3Logged = ref(false)
const showcase4Logged = ref(false)
const showcase5Logged = ref(false)
const showcase6Logged = ref(false)
const showcase7Logged = ref(false)
const showcase8Logged = ref(false)
const showcase9Logged = ref(false)
const showcase10Logged = ref(false)
const showcase11Logged = ref(false)
const showcase12Logged = ref(false)
const showcase13Logged = ref(false)

// NEU: Steuert, welches Overlay-Bild gerade angezeigt wird (0 => keins).
const currentShowcase = ref(0)

// Funktion zum Überprüfen der Position der Elemente
function checkPositions() {
  // Falls noch nicht gescrollt wurde, abbrechen
  if (!hasScrolled.value) {
    return
  }

  const viewportCenter = window.scrollY + window.innerHeight / 2

  // --- Abschnitte für SMARTHOME, TRIFFT, BOTANIK_MARKER, BOTANIK, QUESTIONS ---
  let smarthomeCenter = 0
  let trifftCenter = 0
  let botanikMarkerCenter = 0
  let botanikCenter = 0
  let questionsCenter = 0

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

  if (questionsSection.value) {
    const rect = questionsSection.value.getBoundingClientRect()
    questionsCenter = window.scrollY + rect.top + rect.height / 2
  }

  // Logik zur Anzeige des Scroll-Overlays zwischen SMARTHOME und BOTANIK
  if (viewportCenter > smarthomeCenter && viewportCenter < botanikCenter) {
    if (!showScrollOverlay.value) {
      showScrollOverlay.value = true
    }
  } else {
    if (showScrollOverlay.value) {
      showScrollOverlay.value = false
    }
  }

  // Zentraler Text für SMARTHOME, TRIFFT, BOTANIK_MARKER (als "BOTANIK")
  if (viewportCenter >= smarthomeCenter && viewportCenter < trifftCenter) {
    if (currentCentralText.value !== 'SMARTHOME') {
      currentCentralText.value = 'SMARTHOME'
    }
  } else if (viewportCenter >= trifftCenter && viewportCenter < botanikMarkerCenter) {
    if (currentCentralText.value !== 'TRIFFT') {
      currentCentralText.value = 'TRIFFT'
    }
  } else if (viewportCenter >= botanikMarkerCenter && viewportCenter < botanikCenter) {
    if (currentCentralText.value !== 'BOTANIK') {
      currentCentralText.value = 'BOTANIK'
    }
  } else {
    if (currentCentralText.value !== null) {
      currentCentralText.value = null
    }
  }

  // -- Logging, wenn QUESTIONS in der Mitte ist --
  if (!questionsSectionLogged.value && Math.abs(viewportCenter - questionsCenter) <= 10) {
    console.log('QUESTIONS ist jetzt in der Bildschirmmitte.')
    questionsSectionLogged.value = true
  } else if (questionsSectionLogged.value && viewportCenter < questionsCenter - 10) {
    questionsSectionLogged.value = false
  }

  // -- Logging, wenn SMARTHOME in der Mitte ist --
  if (!smarthomeLogged.value && Math.abs(viewportCenter - smarthomeCenter) <= 10) {
    console.log('SMARTHOME ist jetzt in der Bildschirmmitte.')
    smarthomeLogged.value = true
  } else if (smarthomeLogged.value && viewportCenter < smarthomeCenter - 10) {
    smarthomeLogged.value = false
  }

  // -- Logging, wenn TRIFFT in der Mitte ist --
  if (!trifftLogged.value && Math.abs(viewportCenter - trifftCenter) <= 10) {
    console.log('TRIFFT ist jetzt in der Bildschirmmitte.')
    trifftLogged.value = true
    showcase1Logged.value = false
    currentShowcase.value = 0
  } else if (trifftLogged.value && viewportCenter < trifftCenter - 10) {
    trifftLogged.value = false
  }

  // -- Logging, wenn BOTANIK_MARKER in der Mitte ist --
  if (!botanikMarkerLogged.value && Math.abs(viewportCenter - botanikMarkerCenter) <= 10) {
    console.log('BOTANIK_MARKER ist jetzt in der Bildschirmmitte.')
    botanikMarkerLogged.value = true
    showcase1Logged.value = false
    currentShowcase.value = 0
  } else if (botanikMarkerLogged.value && viewportCenter < botanikMarkerCenter - 10) {
    botanikMarkerLogged.value = false
  }

  // -- Logging, wenn BOTANIK in der Mitte ist --
  if (!botanikLogged.value && Math.abs(viewportCenter - botanikCenter) <= 10) {
    console.log('BOTANIK ist jetzt in der Bildschirmmitte.')
    botanikLogged.value = true
    showcase1Logged.value = false
    currentShowcase.value = 0

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

  // -- Showcase 1 --
let showcase1Center = 0
if (showcase1.value) {
  const rect = showcase1.value.getBoundingClientRect()
  showcase1Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase1Logged.value && Math.abs(viewportCenter - showcase1Center) <= 10) {
  console.log('SHOWCASE1 ist jetzt in der Bildschirmmitte.')
  showcase1Logged.value = true
  currentShowcase.value = 1
} else if (showcase1Logged.value && Math.abs(viewportCenter - showcase1Center) > 10) {
  console.log('SHOWCASE1 hat das Zentrum verlassen.')
  showcase1Logged.value = false
  // Falls du möchtest, dass das Overlay verschwindet, kannst du hier:
  // currentShowcase.value = 0
}

// -- Showcase 2 --
let showcase2Center = 0
if (showcase2.value) {
  const rect = showcase2.value.getBoundingClientRect()
  showcase2Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase2Logged.value && Math.abs(viewportCenter - showcase2Center) <= 10) {
  console.log('SHOWCASE2 ist jetzt in der Bildschirmmitte.')
  showcase2Logged.value = true
  currentShowcase.value = 2
} else if (showcase2Logged.value && Math.abs(viewportCenter - showcase2Center) > 10) {
  console.log('SHOWCASE2 hat das Zentrum verlassen.')
  showcase2Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 3 --
let showcase3Center = 0
if (showcase3.value) {
  const rect = showcase3.value.getBoundingClientRect()
  showcase3Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase3Logged.value && Math.abs(viewportCenter - showcase3Center) <= 10) {
  console.log('SHOWCASE3 ist jetzt in der Bildschirmmitte.')
  showcase3Logged.value = true
  currentShowcase.value = 3
} else if (showcase3Logged.value && Math.abs(viewportCenter - showcase3Center) > 10) {
  console.log('SHOWCASE3 hat das Zentrum verlassen.')
  showcase3Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 4 --
let showcase4Center = 0
if (showcase4.value) {
  const rect = showcase4.value.getBoundingClientRect()
  showcase4Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase4Logged.value && Math.abs(viewportCenter - showcase4Center) <= 10) {
  console.log('SHOWCASE4 ist jetzt in der Bildschirmmitte.')
  showcase4Logged.value = true
  currentShowcase.value = 4
} else if (showcase4Logged.value && Math.abs(viewportCenter - showcase4Center) > 10) {
  console.log('SHOWCASE4 hat das Zentrum verlassen.')
  showcase4Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 5 --
let showcase5Center = 0
if (showcase5.value) {
  const rect = showcase5.value.getBoundingClientRect()
  showcase5Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase5Logged.value && Math.abs(viewportCenter - showcase5Center) <= 10) {
  console.log('SHOWCASE5 ist jetzt in der Bildschirmmitte.')
  showcase5Logged.value = true
  currentShowcase.value = 5
} else if (showcase5Logged.value && Math.abs(viewportCenter - showcase5Center) > 10) {
  console.log('SHOWCASE5 hat das Zentrum verlassen.')
  showcase5Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 6 --
let showcase6Center = 0
if (showcase6.value) {
  const rect = showcase6.value.getBoundingClientRect()
  showcase6Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase6Logged.value && Math.abs(viewportCenter - showcase6Center) <= 10) {
  console.log('SHOWCASE6 ist jetzt in der Bildschirmmitte.')
  showcase6Logged.value = true
  currentShowcase.value = 6
} else if (showcase6Logged.value && Math.abs(viewportCenter - showcase6Center) > 10) {
  console.log('SHOWCASE6 hat das Zentrum verlassen.')
  showcase6Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 7 --
let showcase7Center = 0
if (showcase7.value) {
  const rect = showcase7.value.getBoundingClientRect()
  showcase7Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase7Logged.value && Math.abs(viewportCenter - showcase7Center) <= 10) {
  console.log('SHOWCASE7 ist jetzt in der Bildschirmmitte.')
  showcase7Logged.value = true
  currentShowcase.value = 7
} else if (showcase7Logged.value && Math.abs(viewportCenter - showcase7Center) > 10) {
  console.log('SHOWCASE7 hat das Zentrum verlassen.')
  showcase7Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 8 --
let showcase8Center = 0
if (showcase8.value) {
  const rect = showcase8.value.getBoundingClientRect()
  showcase8Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase8Logged.value && Math.abs(viewportCenter - showcase8Center) <= 10) {
  console.log('SHOWCASE8 ist jetzt in der Bildschirmmitte.')
  showcase8Logged.value = true
  currentShowcase.value = 8
} else if (showcase8Logged.value && Math.abs(viewportCenter - showcase8Center) > 10) {
  console.log('SHOWCASE8 hat das Zentrum verlassen.')
  showcase8Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 9 --
let showcase9Center = 0
if (showcase9.value) {
  const rect = showcase9.value.getBoundingClientRect()
  showcase9Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase9Logged.value && Math.abs(viewportCenter - showcase9Center) <= 10) {
  console.log('SHOWCASE9 ist jetzt in der Bildschirmmitte.')
  showcase9Logged.value = true
  currentShowcase.value = 9
} else if (showcase9Logged.value && Math.abs(viewportCenter - showcase9Center) > 10) {
  console.log('SHOWCASE9 hat das Zentrum verlassen.')
  showcase9Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 10 --
let showcase10Center = 0
if (showcase10.value) {
  const rect = showcase10.value.getBoundingClientRect()
  showcase10Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase10Logged.value && Math.abs(viewportCenter - showcase10Center) <= 10) {
  console.log('SHOWCASE10 ist jetzt in der Bildschirmmitte.')
  showcase10Logged.value = true
  currentShowcase.value = 10
} else if (showcase10Logged.value && Math.abs(viewportCenter - showcase10Center) > 10) {
  console.log('SHOWCASE10 hat das Zentrum verlassen.')
  showcase10Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 11 --
let showcase11Center = 0
if (showcase11.value) {
  const rect = showcase11.value.getBoundingClientRect()
  showcase11Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase11Logged.value && Math.abs(viewportCenter - showcase11Center) <= 10) {
  console.log('SHOWCASE11 ist jetzt in der Bildschirmmitte.')
  showcase11Logged.value = true
  currentShowcase.value = 11
} else if (showcase11Logged.value && Math.abs(viewportCenter - showcase11Center) > 10) {
  console.log('SHOWCASE11 hat das Zentrum verlassen.')
  showcase11Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 12 --
let showcase12Center = 0
if (showcase12.value) {
  const rect = showcase12.value.getBoundingClientRect()
  showcase12Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase12Logged.value && Math.abs(viewportCenter - showcase12Center) <= 10) {
  console.log('SHOWCASE12 ist jetzt in der Bildschirmmitte.')
  showcase12Logged.value = true
  currentShowcase.value = 12
} else if (showcase12Logged.value && Math.abs(viewportCenter - showcase12Center) > 10) {
  console.log('SHOWCASE12 hat das Zentrum verlassen.')
  showcase12Logged.value = false
  // currentShowcase.value = 0
}

// -- Showcase 13 --
let showcase13Center = 0
if (showcase13.value) {
  const rect = showcase13.value.getBoundingClientRect()
  showcase13Center = window.scrollY + rect.top + rect.height / 2
}
if (!showcase13Logged.value && Math.abs(viewportCenter - showcase13Center) <= 10) {
  console.log('SHOWCASE13 ist jetzt in der Bildschirmmitte.')
  showcase13Logged.value = true
  currentShowcase.value = 13
} else if (showcase13Logged.value && Math.abs(viewportCenter - showcase13Center) > 10) {
  console.log('SHOWCASE13 hat das Zentrum verlassen.')
  showcase13Logged.value = false
  // currentShowcase.value = 0
}


  // Parallax-Effekt für das Bild
  if (pictureSection.value) {
    const scrollY = window.scrollY
    pictureTransform.value = `translateY(-${scrollY * 1}px)`
  }
}

// Throttling mit requestAnimationFrame
let ticking = false
function onScroll() {
  if (!hasScrolled.value) {
    hasScrolled.value = true
  }
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

  // Start des Fade-Out nach kurzer Verzögerung
  setTimeout(() => {
    showOverlay.value = false
  }, 100)

  // Scroll-Listener hinzufügen
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  // Scroll-Listener entfernen
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
/* Fade-Out Transition für das Overlay */
.fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-leave-to {
  opacity: 0;
}

/* Optional: Fade-In Transition (falls benötigt) */
.fade-enter-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

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
