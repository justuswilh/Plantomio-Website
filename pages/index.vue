<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'
import Contact from '~/components/Contact.vue'
import ShowcaseCarousel from '~/components/ShowcaseCarousel.vue'
import { useCookieBannerState } from '~/composables/useCookieBannerState'

// Array zur Speicherung der ScrollTrigger-Instanzen
const scrollTriggers: ScrollTrigger[] = []

// Variable zur Speicherung der MatchMedia-Instanz
let mm: ReturnType<typeof ScrollTrigger.matchMedia>

// Variable für Cookie-Banner-Aktivierung
const { setAnimationCompleted } = useCookieBannerState()

// Event-Handler Referenzen für die Bereinigung
let onWheelHandler: (e: WheelEvent) => void
let onTouchMoveHandler: (e: TouchEvent) => void
let onWheel2Handler: (e: WheelEvent) => void
let onTouchMove2Handler: (e: TouchEvent) => void

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // Globale Animationen
  initGlobalAnimations()

  // ScrollTrigger-Breakpoints mit matchMedia
  mm = ScrollTrigger.matchMedia({
  // Desktop-Trigger für große Bildschirme im Hochformat
    '(min-width: 1025px) and (min-height: 670px)': () => {
      initDesktopTriggers()
    },
    // Mobile-Trigger für kleine Bildschirme im Hoch- oder Querformat
    '(max-width: 1024px), (max-height: 669px)': () => {
      initMobileTriggers()
    },
  })

  // Idle-Auto-Scroll aktivieren
  initIdleAutoScroll()

  // Zweiten Idle-Auto-Scroll aktivieren
  // initIdleAutoScrollToBenefits()
})

onUnmounted(() => {
  // Bereinigen aller ScrollTrigger-Instanzen
  scrollTriggers.forEach(trigger => trigger.kill())

  // Bereinigen der matchMedia-Kontexte
  if (mm && typeof mm.revert === 'function') {
    mm.revert()
  }

  // Entfernen der globalen Event-Listener
  cleanupEventListeners()
})

/**
 *  ----------------------------
 *  1) ERSTER AUTOSCROLL (wie gehabt)
 *  ----------------------------
 */
function initIdleAutoScroll() {
  const INACTIVITY_LIMIT = 2000 // z.B. 2s
  let inactivityTimer: number
  let autoScrolling = false
  let autoScrollTween: gsap.core.Tween | null = null
  let autoScrollAllowed = true

  // Keyframe Trigger, der den ersten Autoscroll deaktiviert
  const trigger1 = ScrollTrigger.create({
    trigger: '#showcase-section',
    start: 'top top',
    onEnter: () => {
      disableAutoScroll()
    },
  })
  scrollTriggers.push(trigger1)

  function disableAutoScroll() {
    autoScrollAllowed = false

    if (autoScrolling && autoScrollTween?.isActive()) {
      autoScrollTween.kill()
      autoScrollTween = null
      autoScrolling = false
    }

    window.removeEventListener('wheel', onWheelHandler, { passive: true })
    window.removeEventListener('touchmove', onTouchMoveHandler, { passive: true })
  }

  function resetTimer() {
    if (!autoScrollAllowed)
      return

    clearTimeout(inactivityTimer)
    inactivityTimer = window.setTimeout(() => {
      if (!autoScrolling && autoScrollAllowed) {
        autoScrolling = true
        autoScrollTween = gsap.to(window, {
          scrollTo: '#showcase-section',
          duration: 4,
          ease: 'sine.inOut',
          onComplete: () => {
            autoScrolling = false
            autoScrollTween = null
          },
        })
      }
    }, INACTIVITY_LIMIT)
  }

  onWheelHandler = (e: WheelEvent) => {
    if (Math.abs(e.deltaY) > 0) {
      resetTimer()
      if (autoScrolling && autoScrollTween?.isActive()) {
        autoScrollTween.kill()
        autoScrollTween = null
        autoScrolling = false
        gsap.to(window, { scrollTo: window.scrollY, duration: 0.1 })
      }
    }
  }

  onTouchMoveHandler = () => {
    resetTimer()
    if (autoScrolling && autoScrollTween?.isActive()) {
      autoScrollTween.kill()
      autoScrollTween = null
      autoScrolling = false
      gsap.to(window, { scrollTo: window.scrollY, duration: 0.1 })
    }
  }

  window.addEventListener('wheel', onWheelHandler, { passive: true })
  window.addEventListener('touchmove', onTouchMoveHandler, { passive: true })

  // Timer beim Start aktivieren
  resetTimer()
}

/**
 *  2) ZWEITER AUTOSCROLL -> Scrollt langsam bis #showcaseCarousel
 *     Aktivierung erst, wenn bestimmter Keyframe erreicht.
 *     Deaktivierung, wenn der Keyframe wieder verlassen wird.
 */
// function initIdleAutoScrollToBenefits() {
//   const INACTIVITY_LIMIT_2 = 10000
//   let inactivityTimer2: number
//   let autoScrolling2 = false
//   let autoScrollTween2: gsap.core.Tween | null = null
//   let autoScrollAllowed2 = false // Zu Beginn nicht erlaubt

//   // ScrollTrigger, der den 2. Autoscroll "freigibt"
//   const trigger2 = ScrollTrigger.create({
//     trigger: '#showcase-section',
//     start: 'top+=-10 top',
//     onEnter: () => {
//       autoScrollAllowed2 = true
//       resetTimer2()
//     },
//     onLeaveBack: () => {
//       autoScrollAllowed2 = false
//       if (autoScrolling2 && autoScrollTween2?.isActive()) {
//         autoScrollTween2.kill()
//         autoScrollTween2 = null
//         autoScrolling2 = false
//       }
//     },
//   })
//   scrollTriggers.push(trigger2)

//   // ScrollTrigger, der den 2. Autoscroll deaktiviert
//   const trigger3 = ScrollTrigger.create({
//     trigger: '#showcaseCarousel',
//     start: 'top top',
//     onEnter: () => {
//       disableAutoScroll2()
//     },
//     onEnterBack: () => {
//       disableAutoScroll2()
//     },
//   })
//   scrollTriggers.push(trigger3)

//   // Deaktivierung des zweiten Autoscrolls
//   function disableAutoScroll2() {
//     autoScrollAllowed2 = false

//     // Falls gerade ein Tween läuft, abbrechen
//     if (autoScrolling2 && autoScrollTween2?.isActive()) {
//       autoScrollTween2.kill()
//       autoScrollTween2 = null
//       autoScrolling2 = false
//     }

//     // Event-Listener entfernen
//     window.removeEventListener('wheel', onWheel2Handler, { passive: true })
//     window.removeEventListener('touchmove', onTouchMove2Handler, { passive: true })
//   }

//   // Timer zurücksetzen
//   function resetTimer2() {
//     if (!autoScrollAllowed2)
//       return

//     clearTimeout(inactivityTimer2)
//     inactivityTimer2 = window.setTimeout(() => {
//       if (!autoScrolling2 && autoScrollAllowed2) {
//         autoScrolling2 = true
//         autoScrollTween2 = gsap.to(window, {
//           scrollTo: '#showcaseCarousel',
//           duration: 40,
//           ease: 'power0.in',
//           onComplete: () => {
//             autoScrolling2 = false
//             autoScrollTween2 = null
//           },
//         })
//       }
//     }, INACTIVITY_LIMIT_2)
//   }

//   onWheel2Handler = (e: WheelEvent) => {
//     if (Math.abs(e.deltaY) > 0) {
//       resetTimer2()
//       interruptAutoScroll2()
//     }
//   }

//   onTouchMove2Handler = () => {
//     resetTimer2()
//     interruptAutoScroll2()
//   }

//   function interruptAutoScroll2() {
//     if (autoScrolling2 && autoScrollTween2?.isActive()) {
//       autoScrollTween2.kill()
//       autoScrollTween2 = null
//       autoScrolling2 = false
//       gsap.to(window, { scrollTo: window.scrollY, duration: 0.1 })
//     }
//   }

//   window.addEventListener('wheel', onWheel2Handler, { passive: true })
//   window.addEventListener('touchmove', onTouchMove2Handler, { passive: true })
// }

function initGlobalAnimations() {
  // Overlay Animation
  gsap.set('#black-overlay', { autoAlpha: 1 })
  gsap.to('#black-overlay', {
    autoAlpha: 0,
    duration: 1.2,
    delay: 0.2,
  })

  gsap.fromTo(
    '#hero-image',
    { y: '20%', autoAlpha: 0 },
    { y: '0%', autoAlpha: 1, duration: 1.2, delay: 0.2 },
  )
}

function initMobileTriggers() {
  // ScrollTrigger für #effekt-word1
  const trigger1 = ScrollTrigger.create({
    trigger: '#word-section1',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#pinned-heading', { autoAlpha: 0 })
      gsap.set('#effekt-word1', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#pinned-heading', { autoAlpha: 0 })
      gsap.set('#effekt-word1', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word1', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger1)

  // ScrollTrigger für #effekt-word2
  const trigger2 = ScrollTrigger.create({
    trigger: '#word-section2',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#effekt-word1', { autoAlpha: 0 })
      gsap.set('#effekt-word2', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#effekt-word1', { autoAlpha: 0 })
      gsap.set('#effekt-word2', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word2', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger2)

  // ScrollTrigger für #effekt-word3
  const trigger3 = ScrollTrigger.create({
    trigger: '#word-section3',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#effekt-word2', { autoAlpha: 0 })
      gsap.set('#effekt-word3', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#effekt-word2', { autoAlpha: 0 })
      gsap.set('#effekt-word3', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word3', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger3)
}

function initDesktopTriggers() {
  // Animation für #pinned-heading
  const timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: '#pinned-heading-section',
      start: 'top-=35 center',
      end: 'bottom+=50 center',
      pin: true,
      scrub: true,
      onEnterBack: () => {
        gsap.set('#pinned-heading', { autoAlpha: 1 })
      },
    },
  })
  timeline1.fromTo(
    '#pinned-heading',
    { scale: 1 },
    { scale: 1.2, duration: 0.2 },
  )
  scrollTriggers.push(timeline1.scrollTrigger)

  // ScrollTrigger für #effekt-word1
  const trigger1 = ScrollTrigger.create({
    trigger: '#word-section1',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#pinned-heading', { autoAlpha: 0 })
      gsap.set('#effekt-word1', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#pinned-heading', { autoAlpha: 0 })
      gsap.set('#effekt-word1', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word1', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger1)

  // ScrollTrigger für #effekt-word2
  const trigger2 = ScrollTrigger.create({
    trigger: '#word-section2',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#effekt-word1', { autoAlpha: 0 })
      gsap.set('#effekt-word2', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#effekt-word1', { autoAlpha: 0 })
      gsap.set('#effekt-word2', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word2', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger2)

  // ScrollTrigger für #effekt-word3
  const trigger3 = ScrollTrigger.create({
    trigger: '#word-section3',
    start: 'top+=50 center',
    end: 'bottom+=50 center',
    pin: true,
    onEnter: () => {
      gsap.set('#effekt-word2', { autoAlpha: 0 })
      gsap.set('#effekt-word3', { autoAlpha: 1 })
    },
    onEnterBack: () => {
      gsap.set('#effekt-word2', { autoAlpha: 0 })
      gsap.set('#effekt-word3', { autoAlpha: 1 })
    },
    onLeaveBack: () => gsap.set('#effekt-word3', { autoAlpha: 0 }),
  })
  scrollTriggers.push(trigger3)

  // Ausklappen von #showcase-info1
  const trigger4 = ScrollTrigger.create({
    trigger: '#showcase-section',
    start: 'top+=200 center',
    end: 'bottom+=50 center',
    scrub: true,
    onEnter: () => {
      gsap.to('#showcase-info1', {
        x: 0,
        duration: 1,
        ease: 'power2.out',
      })
    },
    onLeaveBack: () => {
      gsap.to('#showcase-info1', {
        x: -800,
        duration: 1,
        ease: 'power2.in',
      })
    },
  })
  scrollTriggers.push(trigger4)

  // #effekt-word3 schneller bewegen
  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#showcase-section',
      start: 'top+=300 center',
      end: 'top+=600 center',
      scrub: true,
    },
  })
  timeline2.fromTo(
    '#effekt-word3',
    { y: 0 },
    { y: -200, duration: 5 },
  )
  scrollTriggers.push(timeline2.scrollTrigger)

  // Showcase-Content 1 pinnen
  const trigger5 = ScrollTrigger.create({
    trigger: '#showcase-section',
    start: 'top top',
    end: 'bottom top',
    pin: '#showcase-content1',
    pinSpacing: false,
    scrub: true,
    onEnter: () => {
      setAnimationCompleted()
    },
  })
  scrollTriggers.push(trigger5)

  // Showcase-Content 2 pinnen und einblenden
  const trigger6 = ScrollTrigger.create({
    trigger: '#showcase-content2',
    start: 'top top',
    end: 'bottom+=200 top',
    pin: '#showcase-content2',
    pinSpacing: false,
    onEnter: () => {
      gsap.to('#showcase-info2', {
        x: 0,
        duration: 1,
        ease: 'power2.out',
      })
      gsap.to('#step2', {
        autoAlpha: 1,
        duration: 1,
        ease: 'power2.out',
      })
    },
    onLeaveBack: () => {
      gsap.to('#showcase-info2', {
        x: -800,
        duration: 0.6,
        ease: 'power2.in',
      })
      gsap.to('#step2', {
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.in',
      })
    },
  })
  scrollTriggers.push(trigger6)

  // Showcase-Content 3 pinnen und einblenden
  const trigger7 = ScrollTrigger.create({
    trigger: '#showcase-content3',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      gsap.to('#showcase-info3', {
        x: 0,
        duration: 1,
        ease: 'power2.out',
      })
      gsap.to('#step3', {
        autoAlpha: 1,
        duration: 1,
        ease: 'power2.out',
      })
    },
    onLeaveBack: () => {
      gsap.to('#showcase-info3', {
        x: -800,
        duration: 0.6,
        ease: 'power2.in',
      })
      gsap.to('#step3', {
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.in',
      })
    },
  })
  scrollTriggers.push(trigger7)
}

/**
 * Funktion zum Entfernen der globalen Event-Listener
 */
function cleanupEventListeners() {
  if (onWheelHandler) {
    window.removeEventListener('wheel', onWheelHandler, { passive: true })
  }
  if (onTouchMoveHandler) {
    window.removeEventListener('touchmove', onTouchMoveHandler, { passive: true })
  }
  if (onWheel2Handler) {
    window.removeEventListener('wheel', onWheel2Handler, { passive: true })
  }
  if (onTouchMove2Handler) {
    window.removeEventListener('touchmove', onTouchMove2Handler, { passive: true })
  }
}
</script>

<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  </head>
  <div class="scroll-container">
    <!-- 1) Schwarzes Overlay (fixed) -->
    <div id="black-overlay" class="black-overlay" />

    <!-- 2) Image-Abschnitt (normal im Flow) -->
    <section
      id="image-section"
      class="hero-section"
    >
      <div class="hero-image-container">
        <img
          id="hero-image"
          src="/Logo.svg"
          alt="Hero"
          class="hero-image"
        >
      </div>
    </section>

    <!-- 3) Erste Überschrift (pinned + skaliert) -->
    <section
      id="pinned-heading-section"
      class="pinned-heading-section mobil-invisible"
    >
      <h1 id="pinned-heading" class="pinned-heading">
        Automatische Versorgung für deine Pflanzen!<br>
        Aber wie?
      </h1>
    </section>

    <!-- 4) Wort-Abschnitt (pinned) -->
    <section
      id="word-section"
      class="word-section text-black z-50"
    >
      <div id="word-section1" class="word-section">
        <div id="effekt-word1" class="effekt-word">
          Smarthome
        </div>
      </div>
      <div id="word-section2" class="word-section">
        <div id="effekt-word2" class="effekt-word">
          Trifft
        </div>
      </div>
      <div id="word-section3" class="word-section">
        <div id="effekt-word3" class="effekt-word">
          Botanik
        </div>
      </div>
    </section>
    <div spacer class="spacer" />

    <!-- 5) Showcase-Section -->
    <section id="showcase-section" class="showcase-section">
      <div id="showcase-content1" class="showcase-content">
        <!-- Linker Bereich (1/3) -->
        <div id="showcase-info1" class="showcase-info bg-secondary">
          <div id="showcase-info-text1" class="showcase-info-text">
            <p class="text-large pb-6 text-white font-semibold">
              Zielgenaue<br>Bewässerung
            </p>
            <img src="/plantmonitor+plug.png" alt="Showcase Image" class="device-image">
            <div class="flex flex-col">
              <p class="text-base text-white pb-4 font-semibold">
                Reduziert Sorgen und Wasserbedarf
              </p>
              <p class="text-base text-white font-normal whitespace-normal">
                Dank Monitoring und intelligenter Steuerung schließt du nicht nur Unterversorgung aus, sondern profitierst auch vom Wasser-Sparpotential einer bedarfsgerechten Tröpfchenbewässerung.
              </p>
            </div>
          </div>
        </div>
        <!-- Rechter Bereich (2/3) -->
        <div class="image-container">
          <img src="/showcase/1.png" alt="Showcase Image" class="showcase-image">
          <img id="step2" src="/showcase/2.png" alt="Showcase Image" class="showcase-image-hidden mobil-invisible">
          <img id="step3" src="/showcase/3.png" alt="Showcase Image" class="showcase-image-hidden mobil-invisible">
          <div class="flex w-full gap-3 flex-col mb-4 z-50 mobil-invisible mt-auto">
            <div class="flex w-full text-lg font-semibold flex-col">
              <p class="font-normal uppercase py-1 tracking-widest px-10">
                Monitoring
              </p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white">
                <div class="flex flex-col w-1/3">
                  <p class="">
                    Feuchtigkeit im Pflanzsubstrat
                  </p>
                </div>
                <div id="step2" class="flex flex-col invisible w-1/3">
                  <p>Füllstand, Wassertemperatur, EC-Wert, Ph-Wert</p>
                </div>
                <div id="step3" class="flex flex-col invisible w-1/3">
                  <p>Temperatur, Luftfeuchtigkeit, Optisch, VPD (Dampfdruckdefizit)</p>
                </div>
              </div>
            </div>
            <div class="flexd text-lg w-full font-semibold flex-col">
              <p class="font-normal tracking-widest py-1 uppercase px-10">
                Automatisierung
              </p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white">
                <div class="flex flex-col w-1/3">
                  <p class="">
                    Bewässerung
                  </p>
                </div>
                <div id="step2" class="flex flex-col w-1/3 invisible">
                  <p>Nährstoffversorgung, Ph-Management, Wasserbezug</p>
                </div>
                <div id="step3" class="flex flex-col w-1/3 invisible">
                  <p>Klimamanagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content2 -->
      <div id="showcase-content2" class="showcase-content">
        <!-- Linker Bereich (1/3) -->
        <div id="showcase-info2" class="showcase-info bg-secondary">
          <div id="showcase-info-text2" class="showcase-info-text">
            <p class="text-large pb-6 text-white font-semibold">
              Nährstoffversorgung<br>ohne Kompromisse
            </p>
            <div class="flex flex-col">
              <p class="text-base text-white pb-4 font-semibold">
                Tankmonitor
              </p>
              <p class="text-base text-white font-normal whitespace-normal">
                Um sichere Automatisierung zu gewährleisten, wird der Nährstofftank zu jeder Zeit durch Radar und Messsonden überwacht.
              </p>
            </div>
            <div class="flex flex-col">
              <p class="text-base text-white pb-4 font-semibold">
                Nährstoffcontroller
              </p>
              <p class="text-base text-white font-normal whitespace-normal">
                Drei Komponenten eines Düngemittelsystems und Zwei Ph-Korrerkturlösungen werden bei Bedarf automatisch infundiert.
              </p>
            </div>
          </div>
        </div>
        <!-- Mobilversion Image -->
        <div class="image-container-invisible">
          <img src="/showcase/2.png" alt="Showcase Image" class="showcase-image">
        </div>
      </div>

      <!-- Content3 -->
      <div id="showcase-content3" class="showcase-content">
        <!-- Linker Bereich (1/3) -->
        <div id="showcase-info3" class="showcase-info bg-secondary">
          <div id="showcase-info-text3" class="showcase-info-text">
            <p class="text-large pb-6 text-white font-semibold">
              Volle Kontrolle?<br>Kein Problem!
            </p>
            <img src="/climatemonitor+plug.png" alt="Showcase Image" class="device-image max-w-sm">
            <div class="flex flex-col">
              <p class="text-base text-white pb-4 font-semibold">
                Ganzjährig bestes Klima
              </p>
              <p class="text-base text-white font-normal whitespace-normal">
                Ob Indoor oder im isolierten Gewächshaus, unser System übernimmt die Regulierung des Klimas, abgestimmt auf deine Pflanzen. Unsere SmartPlugs ermöglichen das Einbinden analoger Geräte. Außerdem können smarte Geräte wie Thermostate oder Abluftventilatoren eingebunden werden.
              </p>
            </div>
          </div>
        </div>
        <!-- Mobilversion Image und Beschreibung -->
        <div class="image-container-invisible">
          <img src="/showcase/3.png" alt="Showcase Image" class="showcase-image mobil-padding">
          <div class="flex w-full gap-3 flex-col mb-4 z-50 mt-auto">
            <div class="flex w-full text-lg font-semibold flex-col">
              <p class="font-normal uppercase py-1 tracking-widest text-2xl px-10">
                Monitoring
              </p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 text-lg bg-lightblue text-white">
                <div class="flex flex-col">
                  <p>Substratfeuchtigkeit</p>
                  <p>Füllstand</p>
                  <p>Wassertemperatur</p>
                  <p>EC-Wert</p>
                  <p>PH-Wert</p>
                  <p>Temperatur</p>
                  <p>Luftfeuchtigkeit</p>
                  <p>VPD</p>
                  <p>Optisch</p>
                </div>
              </div>
            </div>
            <div class="flexd text-lg w-full font-semibold flex-col">
              <p class="font-normal tracking-widest py-1 uppercase text-2xl px-10">
                Automatisierung
              </p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 text-xl bg-lightblue text-white">
                <div class="flex flex-col w-1/3">
                  <p>Bewässerung</p>
                  <p>Nährstoffversorgung</p>
                  <p>Ph-Management</p>
                  <p>Wasserbezug</p>
                  <p>Klimamanagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <ShowcaseCarousel />
    </section>

    <section id="benefits" class="flex flex-col text-primary min-h-screen">
      <div class="flex flex-col bg-secondary text-white">
        <p class="text-large font-semibold mt-6 mb-8 text-center justify-top">
          Vorteile auf einen Blick
        </p>
      </div>
      <div class="benefits-grid">
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/1.svg" alt="Benefit 1 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Hybrides Monitoring
          </p>
          <p class="text-base2 mt-1 font-medium">
            Messung und Auswertung aller relevanten Einflussfaktoren
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/2.svg" alt="Benefit 2 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Automatische Versorgung
          </p>
          <p class="text-base2 mt-1 font-medium">
            Kabellose, modulare Plug and Play Automatisierung
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/3.svg" alt="Benefit 3 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Intelligente Gartenassistenz
          </p>
          <p class="text-base2 mt-1 font-medium">
            Interaktiv angeleitet, ohne Vorwissen, erfolgreich kultivieren
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/4.svg" alt="Benefit 4 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Smarthome Prinzip
          </p>
          <p class="text-base2 mt-1 font-medium">
            Kabellos, flexibel, unkompliziert, erweiterbar, günstig
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/5.svg" alt="Benefit 5 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Zeitersparnis
          </p>
          <p class="text-base2 mt-1 font-medium">
            Weniger Zeit und Mühe, dafür mehr Zeit zum genießen
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/6.svg" alt="Benefit 6 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Mehr Ertrag
          </p>
          <p class="text-base2 mt-1 font-medium">
            Egal was du ernten willst, wir machen einfach mehr daraus
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/7.svg" alt="Benefit 7 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Versorgung in Abwesenheit
          </p>
          <p class="text-base2 mt-1 font-medium">
            Erfolgreich im Garten, trotz flexiblen Lebensstil
          </p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/8.svg" alt="Benefit 8 Image" class="benefit-image">
          </div>
          <p class="text-base mt-4 font-bold">
            Keine Sorgen mehr
          </p>
          <p class="text-base2 mt-1 font-medium">
            Nichts im Leben ist sicher aber deine Pflanzen sind nah dran
          </p>
        </div>
      </div>
    </section>

    <Contact />

    <footer class="flex flex-col md:text-lg text-gray-300 bg-footer md:mt-12 pt-6">
      <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-20 mb-4">
        <div class="flex grow" />
        <div class="flex flex-col grow items-center">
          <div class="flex flex-col items-start w-60">
            <span class="mb-2 uppercase text-sm">Rechtliches</span>
            <NuxtLink href="/impressum" class="mb-2 hover:underline">
              Impressum
            </NuxtLink>
            <NuxtLink href="/datenschutz" class="hover:underline">
              Datenschutz
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col grow items-center">
          <div class="flex flex-col items-start w-60">
            <span class="mb-2 uppercase text-sm">Kontakt</span>
            <a href="mailto:team@plantomio.de" class="mb-2 hover:underline">team@plantomio.de</a>
            <a class="">+49 157 87351403</a>
          </div>
        </div>
        <div class="flex grow" />
      </div>
      <!-- Copyright -->
      <p class="text-center">
        &copy; 2025 Plantomio UG
      </p>
    </footer>
  </div>
</template>

<style scoped>
  /* Container-Stile */
  .scroll-container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  /* Schwarzes Overlay (fixed, kein Platz im Dokumentenfluss) */
  #black-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .hero-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 30%;
  }

  .hero-image {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
  }

  /* Überschrift (pinned) */
  .pinned-heading-section {
    position: relative; /* Notwendig für Pinning */
    display: flex;
    height: 60vh;
    align-items: top;
    justify-content: center;
  }

  .pinned-heading {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    transform-origin: center center; /* Für zentrierte Skalierung */
    will-change: transform, opacity;  /* Optimierung für Animationen */
  }

  /* Wort-Abschnitt (pinned) */
  .word-section {
    position: relative; /* Notwendig für Pinning */
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .effekt-word {
    font-size: 5rem;
    font-weight: 500 ;
    margin-bottom: 60vh;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; /* Initial versteckt */
    text-transform: uppercase;
  }

  /* Showcase-Section */
.showcase-section {
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center; /* Vollständige Anzeigehöhe */
  box-sizing: border-box;
  margin: 0 0 100vh 0;
}

.showcase-content {
  display: flex;
  width: 100%;
}

/* Linker Bereich (1/3) */
.showcase-info {
  flex: 1; /* 1/3 */
  position: relative;
  width: 30%;
  height: 100vh;
  border-radius: 0px 15px 15px 0px; /* Runde Ecken */
  transform: translateX(-800px); /* Initiale Position für Animation */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.showcase-info-text {
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
}

/* Rechter Bereich (2/3) */
.image-container {
  flex: 2; /* 2/3 */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: top;
  flex-grow: q;
  height: 100vh;
}

.image-container-invisible {
  flex: 2; /* 2/3 */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: top;
  flex-grow: q;
  height: 100vh;
  opacity: 0;
}

.showcase-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
  position: absolute;
}

.showcase-image-hidden {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
  position: absolute;
  opacity: 0;
}

.device-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
  margin: 0 auto;
}

.benefit {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 50%;
  margin-bottom: 2%;
}

.benefit-image {
  max-width: 100%;
  max-height: 25vh;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
}

.bg-lightblue {
  background-color: #8aaabd;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 3rem;          /* mt-12 */
  gap: 5rem;                 /* gap-20 */
  grid-template-rows: repeat(2, minmax(0, 1fr));
  border-radius: 0.75rem;    /* rounded-xl */
  flex-grow: 1;              /* grow */
  margin-left: 5rem;         /* ml-20 */
  margin-right: 2.5rem;      /* mr-10 */
  text-align: left;          /* text-left */
}

.text-base {
  font-size: 1.5rem;        /* text-lg */
}

.text-base2 {
  font-size: 1.2rem;        /* text-lg */
}

.text-large {
  font-size: 2.5rem;        /* text-2xl */
}

@media (max-width: 1024px), (max-height: 669px) {
  .hero-image-container {
    width: 70%;
  }

  .hero-image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-height: 70vh;
  }

  .effekt-word {
    font-size: 2.5rem;
    font-weight: 600 ;
  }

  .spacer {
    height: 48px;
  }

  .text-base {
    font-size: 1.2rem;        /* text-lg */
  }

  .text-large {
    font-size: 1.6rem;        /* text-2xl */
  }

  .device-image {
    max-width: 70%;
    max-height: 40vh;
    object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
    margin: 0 auto;
  }

  .showcase-section {
    width: 100%;           /* zusätzlich */
    margin: 0;             /* zusätzlich */
  }

  .showcase-content {
    flex-direction: column;/* zusätzlich */
  }

  .mobil-invisible {
    display: none;
  }

  .showcase-info {
    width: 100%;           /* statt 30% */
    transform: translateX(0px); /* statt -800px */
    height: fit-content;
    border-radius: 15px; /* Runde Ecken */
  }

  .showcase-info-text {
    padding: 5vh 5vh 8vh 5vh;     /* zusätzlich */
    gap: 4vh;             /* zusätzlich */
  }

  .showcase-image {
  position: relative;
  }

  .mobil-padding {
    padding: 8vh 0 5vh 0;
  }

  .mobil-padding-bottom {
    padding-top: 10vh;
  }

  .image-container-invisible {
    opacity: 1;
  }

  .benefits-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    gap: 1rem;             /* zusätzlich */
    margin: 1rem 1rem 0rem 1rem; /* zusätzlich */
  }

}
 </style>
