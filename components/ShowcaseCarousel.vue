<!-- CarouselWithText.vue -->
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Array der Bildquellen
const items = [
  '/usecase/1.png',
  '/usecase/2.png',
  '/usecase/3.png',
  '/usecase/4.png',
  '/usecase/5.png',
  '/usecase/6.png',
  '/usecase/7.png',
]

// Array der zugehörigen Texte
const texts = [
  'Immergrünes Wohnzimmer? Auch nach deinem Urlaub!',
  'Bestens versorgt. Dein kleiner Garten in der vierten Etage.',
  'Regionales Gemüse? Regionaler gehts nicht!',
  'Komfortabel und automatisiert. Wo bleibt da die Mühe?',
  'Wenig Ahnung aber dein HomeGrow gelingt immer? Gern geschehen!',
  'Sessional oder Ganzjährig? Deine Entscheidung.',
  'Hol alles Raus! Bis zu 30% beschleunigtes Wachstum.',
]

// Reaktive Referenz für den aktuellen Index
const currentIndex = ref(0)

// Template-Ref für UCarousel
const carouselRef = ref<InstanceType<typeof UCarousel> | null>(null)

// Event-Handler für Carousel-Index-Änderungen
function updateCurrentIndex() {
  if (carouselRef.value?.emblaApi) {
    currentIndex.value = carouselRef.value.emblaApi.selectedScrollSnap()
  }
}

onMounted(() => {
  if (carouselRef.value?.emblaApi) {
    // Initialen Index setzen
    currentIndex.value = carouselRef.value.emblaApi.selectedScrollSnap()

    // Auf 'select' Ereignis hören
    carouselRef.value.emblaApi.on('select', updateCurrentIndex)
  }
})

onBeforeUnmount(() => {
  if (carouselRef.value?.emblaApi) {
    carouselRef.value.emblaApi.off('select', updateCurrentIndex)
  }
})
</script>

<template>
  <div id="showcaseCarousel" class="section">
    <!-- Carousel-Komponente mit Ref -->
    <UCarousel
      ref="carouselRef"
      loop
      arrows
      :autoplay="{ delay: 4000 }"
      :items="items"
      :ui="{ item: 'basis-full md:basis-1/3' }"
      class="settings"
    >
      <template #default="{ item }">
        <img :src="item" width="900" height="" class="flex rounded-lg picture">
      </template>
    </UCarousel>

    <!-- Text-Container unter dem Carousel -->
    <div class="text-container font-bold text-xl! md:text-4xl!">
      <p>{{ texts[currentIndex] }}</p>
    </div>
  </div>
</template>

  <style scoped>
  .settings {
    width: 90%;
    margin: 0 auto;
  }

  .text-container {
    text-align: center;
    padding-top: 20vh;
    font-size: 1.2rem;
    /* Weitere Styles nach Bedarf */
  }

  .picture {
   padding-left: 4vw;
   padding-right: 4vw;
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 10vh 0;
  }

  @media (max-width: 768px) {
  .section {
    min-height: 60vh;
    width: 80%;
    margin: 20vh auto;
  }
  }
  </style>
