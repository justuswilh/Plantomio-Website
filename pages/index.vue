<template>
    <div class="scroll-container">
      
      <!-- 1) Schwarzes Overlay (fixed) -->
      <div id="black-overlay" class="black-overlay"></div>
  
      <!-- 2) Image-Abschnitt (normal im Flow) -->
      <section
        id="image-section"
        class="flex items-center justify-center h-screen w-full"
      >
        <img
          id="hero-image"
          src="/Logo.svg"
          alt="Hero"
          class="w-content max-w-md sm:max-w-lg lg:max-w-xl mx-auto items-center object-cover sm:object-contain"
        />
      </section>
  
      <!-- 3) Erste Überschrift (pinned + skaliert) -->
      <section
        id="pinned-heading-section"
        class="pinned-heading-section"
      >
        <h1 id="pinned-heading" class="pinned-heading">
          Automatische Versorgung für deine Pflanzen!<br />
          Aber wie?
        </h1>
      </section>
  
      <!-- 4) Wort-Abschnitt (pinned) -->
      <section
        id="word-section"
        class="word-section"
      >
        <div id="effekt-word1" class="effekt-word1">Wort1</div>
        <div id="effekt-word2" class="effekt-word2">Wort2</div>
        <div id="effekt-word3" class="effekt-word3">Wort3</div>
      </section>
  
      <!-- 5) Nächste Überschrift (normaler Fluss) -->
      <section
        id="next-heading-section"
        class="next-heading-section"
      >
        <h2 id="next-heading">Nächste Überschrift</h2>
        <p>Lorem ipsum dolor sit amet ...</p>
      </section>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  onMounted(() => {
    // Overlay Animation
    gsap.set('#black-overlay', { autoAlpha: 1 })
    gsap.to('#black-overlay', {
      autoAlpha: 0,
      duration: 1.2,
      delay: 0.2
    })
  
    gsap.fromTo('#hero-image',
      { y: '20%', autoAlpha: 0 },
      { y: '0%', autoAlpha: 1, duration: 1.2, delay: 0.2 }
    )
  
    // Scroll-triggered Animations
    initGsapAnimations()
  })
  
  function initGsapAnimations() {
  
    // Animation für #pinned-heading
    gsap.timeline({
      scrollTrigger: {
        trigger: '#pinned-heading',
        start: 'top+=50 center',
        end: 'bottom+=150 center',
        pin: true,
        scrub: true,
        markers: true,
        onEnterBack: () => {
          gsap.set('#pinned-heading', { autoAlpha: 1 });
        },
      }
    })
    .fromTo(
      '#pinned-heading',
      { scale: 1 },
      { scale: 1.2, duration: 0.2 }
    )
  
    // ScrollTrigger für schlagartiges Einblenden von #effekt-word1
    ScrollTrigger.create({
      trigger: '#effekt-word1',
      start: 'top+=50 center',
      end: 'bottom+=220 center',
      pin: true,
      onEnter: () => {
              gsap.set('#pinned-heading', { autoAlpha: 0 });
              gsap.set('#effekt-word1', { autoAlpha: 1 });
              },
      onEnterBack: () =>  {
              gsap.set('#pinned-heading', { autoAlpha: 1 });
              gsap.set('#effekt-word1', { autoAlpha: 0 });
              },
      onLeaveBack: () => gsap.set('#effekt-word1', { autoAlpha: 0 }),
      markers: true
    });
  
    ScrollTrigger.create({
      trigger: '#effekt-word2',
      start: 'top+=50 center',
      end: 'bottom+=150 center',
      pin: true,
      onEnter: () => {
        gsap.set('#effekt-word1', { autoAlpha: 0 });
        gsap.set('#effekt-word2', { autoAlpha: 1 });
      },
      onEnterBack: () => {
        gsap.set('#effekt-word1', { autoAlpha: 1 });
        gsap.set('#effekt-word2', { autoAlpha: 0 });
      },
      onLeaveBack: () => gsap.set('#effekt-word2', { autoAlpha: 0 }),
      markers: true
    });
  }
  </script>
  
  <style scoped>
  /* Container-Stile */
  .scroll-container {
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
  
  /* Überschrift (pinned) */
  .pinned-heading-section {
    position: relative; /* Notwendig für Pinning */
    margin-top: 10px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pinned-heading {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
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
  
  .effekt-word1 {
    font-size: 3rem;
    margin-bottom: 10rem;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; /* Initial versteckt */
  }
  
  .effekt-word2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; 
  }
  
  .effekt-word3 {
    font-size: 3rem;
    margin-bottom: 1rem;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; 
  }
  
  /* Nächste Überschrift */
  .next-heading-section {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* Stile für dauerhaft gepinnte Elemente */
  .permanently-pinned {
    /* Zusätzliche Stile können hier hinzugefügt werden */
    /* Beispiel: Schatten, Rahmen, etc. */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  