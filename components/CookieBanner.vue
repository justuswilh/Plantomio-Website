<!-- components/CookieBanner.vue -->
<script setup lang="ts">
import { useNuxtApp, useRoute } from '#app'
import { onMounted, ref, watch } from 'vue'
import { useCookieBannerState } from '~/composables/useCookieBannerState'

const isConsentGiven = ref(false)
const showBanner = ref(false)
const shouldShowBanner = ref(false)

const nuxtApp = useNuxtApp()
const cookies = nuxtApp.$cookies

const route = useRoute()

const { animationCompleted } = useCookieBannerState()

onMounted(() => {
  const consent = cookies.get('cookieConsent')
  console.log('Cookie consent:', consent) // Debugging
  if (consent === 'true' || consent === 'false') {
    isConsentGiven.value = true
  }
  else {
    if (route.path === '/') {
      // Auf der Landingpage: Warten auf das Animationsende
      if (animationCompleted.value) {
        showBanner.value = true
      }
      // Beobachten, ob die Animation abgeschlossen wird
      watch(animationCompleted, (newVal) => {
        if (newVal && !isConsentGiven.value) {
          showBanner.value = true
        }
      })
    }
    else {
      // Auf anderen Seiten: Banner sofort anzeigen
      showBanner.value = true
    }
  }

  // Kombinieren der Bedingungen für die Anzeige des Banners
  watch([isConsentGiven, showBanner], () => {
    shouldShowBanner.value = !isConsentGiven.value && showBanner.value
  }, { immediate: true })
})

function acceptCookies() {
  cookies.set('cookieConsent', 'true', { expires: '30d' })
  isConsentGiven.value = true
  showBanner.value = false
  // Hier kannst du optional weitere Aktionen ausführen, z.B. das Laden von Tracking-Skripten
}

function rejectCookies() {
  cookies.set('cookieConsent', 'false', { expires: '30d' })
  isConsentGiven.value = true
  showBanner.value = false
  // Hier kannst du optional weitere Aktionen ausführen, z.B. das Blockieren von Tracking-Skripten
}
</script>

<template>
  <div v-if="shouldShowBanner" class="cookie-banner">
    <div class="cookie-content">
      <p>
        Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen. <br>
        Weitere Informationen finden Sie in unserer <NuxtLink href="/datenschutz" class="underline text-white">
          Datenschutz
        </NuxtLink>.
      </p>
      <div class="cookie-buttons">
        <UButton color="primary" variant="outline" @click="acceptCookies">
          Akzeptieren
        </UButton>
        <UButton color="error" variant="outline" @click="rejectCookies">
          Ablehnen
        </UButton>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #555; /* Grau als Hintergrundfarbe */
    color: #fff;
    padding: 1rem 1.5rem; /* Reduziertes Padding für geringere Höhe */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3); /* Optional: Schatten für bessere Sichtbarkeit */
  }

  .cookie-content {
    max-width: 1200px;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 0.5rem; /* Weniger Abstand zwischen Elementen */
  }

  .cookie-content h3 {
    margin: 0;
    font-size: 1.2rem; /* Kleinere Schriftgröße */
  }

  .cookie-content p {
    margin: 0;
    font-size: 0.9rem; /* Kleinere Schriftgröße */
  }

  .cookie-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem; /* Weniger Abstand zwischen den Buttons */
  }

  .cookie-buttons button {
    padding: 0.5rem 1.5rem; /* Reduziertes Padding für kleinere Buttons */
    border: none;
    cursor: pointer;
    font-size: 0.9rem; /* Kleinere Schriftgröße */
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .cookie-buttons button:first-child {
    background-color: #4caf50; /* Grün für Akzeptieren */
    color: white;
  }

  .cookie-buttons button:first-child:hover {
    background-color: #45a049;
  }

  .cookie-buttons button:last-child {
    background-color: #f44336; /* Rot für Ablehnen */
    color: white;
  }

  .cookie-buttons button:last-child:hover {
    background-color: #da190b;
  }
  </style>
