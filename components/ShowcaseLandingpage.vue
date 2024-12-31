<template>
    <!-- Zeige das Overlay nur, wenn currentShowcase != 0 -->
    <div 
      v-if="currentShowcase !== 0"
      class="fixed inset-0 w-screen h-screen overflow-hidden z-50 bg-transparent"
    >
      <!-- Hier kommt der Transition-Block ins Spiel -->
      <transition name="fade" mode="out-in">
        <!-- 
          Wir verwenden :key="currentShowcase", 
          damit Vue beim Wechsel von Showcase = 1 zu Showcase = 2 
          (oder jedem anderen Wert) einen „richtigen“ Austausch erkennt 
          und den Transition-Hook aufruft.
        -->
        <div :key="currentShowcase">
          <!-- Je nach Wert von currentShowcase wird genau ein Bild angezeigt -->
          <img
            v-if="currentShowcase === 1"
            src="@/public/showcase/1.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 2"
            src="@/public/showcase/2.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 3"
            src="@/public/showcase/3.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 4"
            src="@/public/showcase/4.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 5"
            src="@/public/showcase/5.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 6"
            src="@/public/showcase/6.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 7"
            src="@/public/showcase/7.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 8"
            src="@/public/showcase/8.png"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 9"
            src="@/public/showcase/9.svg"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 10"
            src="@/public/showcase/10.svg"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 11"
            src="@/public/showcase/11.svg"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 12"
            src="@/public/showcase/12.svg"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
          <img
            v-else-if="currentShowcase === 13"
            src="@/public/showcase/13.svg"
            class="absolute inset-0 w-full h-full object-contain object-center"
          />
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    /**
     * currentShowcase:
     *  - 0 => kein Bild
     *  - 1..13 => zeigt eines der 13 Bilder
     */
    currentShowcase: {
      type: Number,
      default: 0
    }
  })
  </script>
  
  <style scoped>
  /* Beispielhafter schneller Fade-In/Fade-Out */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease; /* Zeit und Timing nach Belieben anpassen */
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  