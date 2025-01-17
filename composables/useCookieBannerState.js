// composables/useCookieBannerState.ts
import { ref } from 'vue'

// Gemeinsamer Zustand außerhalb der Funktion
const animationCompleted = ref(false)

export const useCookieBannerState = () => {
  const setAnimationCompleted = () => {
    animationCompleted.value = true
  }

  return {
    animationCompleted,
    setAnimationCompleted,
  }
}
