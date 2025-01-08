<template>
    <div class="scroll-container">
      
      <!-- 1) Schwarzes Overlay (fixed) -->
      <div id="black-overlay" class="black-overlay"></div>
  
      <!-- 2) Image-Abschnitt (normal im Flow) -->
      <section
        id="image-section"
        class="flex items-center justify-center h-screen mb-8 w-full"
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
        class="word-section z-50"
      >
        <div id="word-section1" class="word-section1">
          <div id="effekt-word1" class="effekt-word1">Smarthome</div>
        </div>
        <div id="word-section2" class="word-section2">
          <div id="effekt-word2" class="effekt-word2">Trifft</div>
        </div>
        <div id="word-section3" class="word-section3">
          <div id="effekt-word3" class="effekt-word3">Botanik</div>
        </div>
      </section>
  
      <!-- 5) Nächste Showcase-Section -->
      <section id="showcase-section" class="showcase-section">

        <div id="showcase-content1" class="showcase-content1">
          <!-- Linker Bereich (1/3) -->
          <div id="showcase-info1" class="showcase-info1">
            <div id="showcase-info-text1" class="showcase-info-text1">
              <p class="text-4xl pb-6 text-white font-semibold">Zielgenaue<br />Bewässerung</p>
              <img src="/plantmonitor+plug.png" alt="Showcase Image" class="device-image" />
              <div class="flex flex-col">
                <p class="text-2xl text-white pb-4 font-medium">Reduziert Sorgen und Wasserbedarf</p>
                <p class="text-2xl text-white font-normal whitespace-normal">Dank Monitoring und intelligenter Steuerung schließt du nicht nur Unterversorgung aus, sondern profitierst auch vom Wasser-Sparpotential einer bedarfsgerechten Tröpfchenbewässerung.</p>
              </div>
            </div>
          </div>
          <!-- Rechter Bereich (2/3) -->
          <div class="image-container1">
            <img src="@/public/showcase/4.png" alt="Showcase Image" class="showcase-image" />
            <div class="flex w-full px-6 gap-4 flex-row">
              <div class="flex w-3/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Monitoring</p>
                <p class="border-2 rounded-md">Feuchtigkeit im Pflanzsubstrat</p>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Füllstand</p>
                  <p class="border-2 w-1/2 rounded-md ">Wassertemperatur</p>
                </div>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">EC-Wert</p>
                  <p class="border-2 w-1/2 rounded-md ">Ph-Wert</p>
                </div>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Temperatur</p>
                  <p class="border-2 w-1/2 rounded-md ">Luftfeuchtigkeit</p>
                </div>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">VPD</p>
                  <p class="border-2 w-1/2 rounded-md ">Optisch</p>
                </div>
              </div>
              <div class="flex w-2/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Automatisierung</p>
                <p class="border-2 rounded-md ">Bewässerung</p>
                <p class="border-2 invisible rounded-md ">Nährstoffversorgung</p>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md">Wasserbezug</p>
                  <p class="border-2 w-1/2 rounded-md">Ph-Wert</p>
                </div>
                <p class="border-2 rounded-md invisible">Klimamanagement</p>
              </div>
            </div>
          </div>
        </div>

        <div id="showcase-content2" class="showcase-content2">
          <!-- Linker Bereich (1/3) -->
          <div id="showcase-info2" class="showcase-info2">
            <div id="showcase-info-text2" class="showcase-info-text2">
              <p class="text-4xl pb-6 text-white font-semibold">Nährstoffversorgung<br />ohne Kompromisse</p>
              <div class="flex flex-col">
                <p class="text-3xl text-white pb-4 font-medium">Tankmonitor</p>
                <p class="text-2xl text-white font-normal whitespace-normal">Um sichere Automatisierung zu gewährleisten, wird der Nährstofftank zu jeder Zeit durch Radar und Messsonden überwacht.</p>
              </div>
              <div class="flex flex-col">
                <p class="text-3xl text-white pb-4 font-medium">Nährstoffcontroller</p>
                <p class="text-2xl text-white font-normal whitespace-normal">Drei Komponenten eines Düngemittelsystems und Zwei Ph-Korrerkturlösungen werden bei Bedarf automatisch infundiert.</p>
              </div>
            </div>
          </div>
          <!-- Rechter Bereich (2/3) -->
          <div class="image-container2">
            <img src="@/public/showcase/6.png" alt="Showcase Image" class="showcase-image2" />
            <div class="flex w-full px-6 gap-4 flex-row">
              <div class="flex w-3/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Monitoring</p>
                <p class="border-2 rounded-md">Feuchtigkeit im Pflanzsubstrat</p>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Füllstand</p>
                  <p class="border-2 w-1/2 rounded-md ">Wassertemperatur</p>
                </div>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">EC-Wert</p>
                  <p class="border-2 w-1/2 rounded-md ">Ph-Wert</p>
                </div>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Temperatur</p>
                  <p class="border-2 w-1/2 rounded-md ">Luftfeuchtigkeit</p>
                </div>
                <div class="flex flex-row invisible gap-1">
                  <p class="border-2 w-1/2 rounded-md ">VPD</p>
                  <p class="border-2 w-1/2 rounded-md ">Optisch</p>
                </div>
              </div>
              <div class="flex w-2/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Automatisierung</p>
                <p class="border-2 rounded-md ">Bewässerung</p>
                <p class="border-2 rounded-md ">Nährstoffversorgung</p>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Wasserbezug</p>
                  <p class="border-2 w-1/2 rounded-md ">Ph-Wert</p>
                </div>
                <p class="border-2 rounded-md invisible">Klimamanagement</p>
              </div>
            </div>
          </div>
        </div>

        <div id="showcase-content3" class="showcase-content3">
          <!-- Linker Bereich (1/3) -->
          <div id="showcase-info3" class="showcase-info3">
            <div id="showcase-info-text3" class="showcase-info-text3">
              <p class="text-4xl pb-6 text-white font-semibold">Volle Kontrolle?<br />Kein Problem!</p>
              <img src="/climatemonitor+plug.png" alt="Showcase Image" class="device-image max-w-sm" />
              <div class="flex flex-col">
                <p class="text-2xl text-white pb-4 font-medium">Ganzjährig bestes Klima</p>
                <p class="text-2xl text-white font-normal whitespace-normal">Ob Indoor oder im isolierten Gewächshaus, unser System übernimmt die Regulierung des Klimas, abgestimmt auf deine Pflanzen. Unsere SmartPlugs ermöglichen das Einbinden analoger Geräte. Außerdem können smarte Geräte wie Thermostate oder Abluftventilatoren eingebunden werden. </p>
              </div>
            </div>
          </div>
          <!-- Rechter Bereich (2/3) -->
          <div class="image-container3">
            <img src="@/public/showcase/8.png" alt="Showcase Image" class="showcase-image3" />
            <div class="flex w-full px-6 gap-4 flex-row">
              <div class="flex w-3/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Monitoring</p>
                <p class="border-2 rounded-md">Feuchtigkeit im Pflanzsubstrat</p>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Füllstand</p>
                  <p class="border-2 w-1/2 rounded-md ">Wassertemperatur</p>
                </div>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">EC-Wert</p>
                  <p class="border-2 w-1/2 rounded-md ">Ph-Wert</p>
                </div>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Temperatur</p>
                  <p class="border-2 w-1/2 rounded-md ">Luftfeuchtigkeit</p>
                </div>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">VPD</p>
                  <p class="border-2 w-1/2 rounded-md ">Optisch</p>
                </div>
              </div>
              <div class="flex w-2/5 text-center text-lg font-normal gap-1 flex-col-reverse">
                <p class="pt-1 font-bold">Automatisierung</p>
                <p class="border-2 rounded-md ">Bewässerung</p>
                <p class="border-2 rounded-md ">Nährstoffversorgung</p>
                <div class="flex flex-row gap-1">
                  <p class="border-2 w-1/2 rounded-md ">Wasserbezug</p>
                  <p class="border-2 w-1/2 rounded-md ">Ph-Wert</p>
                </div>
                <p class="border-2 rounded-md ">Klimamanagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col h-screen">
        <p class="text-4xl font-semibold mt-8 mb-12 text-center justify-top">Kleine oder große Pläne?</p> 
        <div class="flex flex-row">
          <div class="w-1/2 place-items-center">
            <image src="/showcase/Small.png" alt="Showcase Small" class="smallShowcase" />
          </div>
          <div class="w-1/2">
            <image src="/showcase/Large.png" alt="Showcase Large" class="largeShowcase" />
          </div>
        </div>
      </section>

      <section class="flex h-screen items-center justify-center">
        <p class="text-4xl font-semibold text-center">Weitere Informationen folgen in Kürze!</p>
          
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
        trigger: '#pinned-heading-section',
        start: 'top-=35 center',
        end: 'bottom+=50 center',
        pin: true,
        scrub: true,
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
      trigger: '#word-section1',
      start: 'top+=50 center',
      end: 'bottom+=50 center',
      pin: true,
      onEnter: () => {
              gsap.set('#pinned-heading', { autoAlpha: 0 });
              gsap.set('#effekt-word1', { autoAlpha: 1 });
              },
      onEnterBack: () =>  {
              gsap.set('#pinned-heading', { autoAlpha: 0 });
              gsap.set('#effekt-word1', { autoAlpha: 1 });
              },
      onLeaveBack: () => gsap.set('#effekt-word1', { autoAlpha: 0 }),
    });
  
    ScrollTrigger.create({
      trigger: '#word-section2',
      start: 'top+=50 center',
      end: 'bottom+=50 center',
      pin: true,
      onEnter: () => {
        gsap.set('#effekt-word1', { autoAlpha: 0 });
        gsap.set('#effekt-word2', { autoAlpha: 1 });
      },
      onEnterBack: () => {
        gsap.set('#effekt-word1', { autoAlpha: 0 });
        gsap.set('#effekt-word2', { autoAlpha: 1 });
      },
      onLeaveBack: () => gsap.set('#effekt-word2', { autoAlpha: 0 }),
    });

    ScrollTrigger.create({
      trigger: '#word-section3',
      start: 'top+=50 center',
      end: 'bottom+=50 center',
      pin: true,
      onEnter: () => {
        gsap.set('#effekt-word2', { autoAlpha: 0 });
        gsap.set('#effekt-word3', { autoAlpha: 1 });
      },
      onEnterBack: () => {
        gsap.set('#effekt-word2', { autoAlpha: 0 });
        gsap.set('#effekt-word3', { autoAlpha: 1 });
      },
      onLeaveBack: () => gsap.set('#effekt-word3', { autoAlpha: 0 }),
    });

    ScrollTrigger.create({
      trigger: '#showcase-section',
      start: 'top+=200 center',
      end: 'bottom+=50 center',
      onEnter: () => {
        gsap.to('#showcase-info1', {
          x: 0, // Entfernt die translateX(-200px) Transformation
          duration: 1, // Dauer der Animation in Sekunden
          ease: 'power2.out' // Easing-Funktion für eine sanfte Animation
        });
      },
      onLeaveBack: () => {
        gsap.to('#showcase-info1', {
          x: -800, // Setzt die translateX zurück
          duration: 1,
          ease: 'power2.in'
        });
      }
    });

    ScrollTrigger.create({
      trigger: '#showcase-content1',
      start: 'top top', // Startpunkt: Oberkante von #showcase-info1 erreicht die Oberkante des Viewports
      end: 'bottom+=100 center', // Dauer des Pinning, kann nach Bedarf angepasst werden
      pin: true, // Das Element, das gepinnt werden soll
      pinSpacing: false, // Entfernt den zusätzlichen Platz, der durch das Pinnen entstehen würde
      scrub: true, // Optional: Ermöglicht eine sanfte Pinning-Animation
      anticipatePin: 1, // Optional: Verbessert die Pinning-Performance
  });

  ScrollTrigger.create({
      trigger: '#showcase-content2',
      start: 'top top',
      end: 'bottom+=100 center',
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.set('#showcase-content1', { autoAlpha: 0 });
        gsap.set('#showcase-content2', { autoAlpha: 1 });
      },
      onLeaveBack: () => {
        gsap.set('#showcase-content1', { autoAlpha: 1 });
        gsap.set('#showcase-content2', { autoAlpha: 0 });
      },
    });

    ScrollTrigger.create({
      trigger: '#showcase-content3',
      start: 'top top',
      end: 'bottom+=50 center',
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.set('#showcase-content2', { autoAlpha: 0 });
        gsap.set('#showcase-content3', { autoAlpha: 1 });
      },
      onLeaveBack: () => {
        gsap.set('#showcase-content2', { autoAlpha: 1 });
        gsap.set('#showcase-content3', { autoAlpha: 0 });
      },
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
  
  .word-section1 {
    position: relative; /* Notwendig für Pinning */
    display: flex;
    align-items: center;
    flex-direction: column;
    transform-origin: center center;
  }

  .word-section2 {
    position: relative; /* Notwendig für Pinning */
    display: flex;
    align-items: center;
    flex-direction: column;
    transform-origin: center center;
  }

  .word-section3 {
    position: relative; /* Notwendig für Pinning */
    display: flex;
    align-items: center;
    flex-direction: column;
    transform-origin: center center;
  }

  .effekt-word1 {
    font-size: 5rem;
    font-weight: 500 ;
    margin-bottom: 60vh;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; /* Initial versteckt */
    text-transform: uppercase;
  }
  
  .effekt-word2 {
    font-size: 5rem;
    font-weight: 500 ;
    margin-bottom: 60vh;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; 
    text-transform: uppercase;
  }
  
  .effekt-word3 {
    font-size: 5rem;
    font-weight: 500 ;
    margin-bottom: 50vh;
    transform-origin: center center;
    will-change: transform, opacity;  /* Optimierung für Animationen */
    opacity: 0; 
    text-transform: uppercase;
  }
  
  /* Showcase-Section */
.showcase-section {
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: center; /* Vollständige Anzeigehöhe */
  box-sizing: border-box;
}

.showcase-content1 {
  display: flex;
  width: 100%;
}

.showcase-content2 {
  margin-top: -40vh;
  display: flex;
  width: 100%;
  opacity: 0;
}

.showcase-content3 {
  margin-top: -40vh;
  margin-bottom: 60vh;
  display: flex;
  width: 100%;
  opacity: 0;
}

/* Linker Bereich (1/3) */
.showcase-info1 {
  flex: 1; /* 1/3 */
  background-color: #68b34b ; /* Hintergrundfarbe nach Wunsch */
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

.showcase-info-text1 {
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
}

/* Rechter Bereich (2/3) */
.image-container1 {
  flex: 2; /* 2/3 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: q;
  height: 100vh;
}

.showcase-image1 {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
}

.device-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
  margin: 0 auto;
}

.showcase-info2 {
  flex: 1; /* 1/3 */
  background-color: #68b34b ; /* Hintergrundfarbe nach Wunsch */
  position: relative;
  width: 30%;
  height: 100vh;
  border-radius: 0px 15px 15px 0px; /* Runde Ecken */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.showcase-info-text2 {
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
}

/* Rechter Bereich (2/3) */
.image-container2 {
  flex: 2; /* 2/3 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: q;
  height: 100vh;
}

.showcase-image2 {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
}

.showcase-info3 {
  flex: 1; /* 1/3 */
  background-color: #68b34b ; /* Hintergrundfarbe nach Wunsch */
  position: relative;
  width: 30%;
  height: 100vh;
  border-radius: 0px 15px 15px 0px; /* Runde Ecken */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.showcase-info-text3 {
  text-align: center;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100%;
}

/* Rechter Bereich (2/3) */
.image-container3 {
  flex: 2; /* 2/3 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: q;
  height: 100vh;
}

.showcase-image3 {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Bild so groß wie möglich ohne Beschneiden */
}

.smallShowcase, .largeShowcase {
    max-height: 80vh;
    width: auto;
    object-fit: contain;
    margin: 0 auto;
}

/* Responsive Verhalten */
@media (max-width: 768px) {
  .showcase-content {
    flex-direction: column;
  }

  .showcase-info, .image-container {
    flex: none;
    width: 100%;
  }

  .showcase-info {
    transform: translateX(0); /* Keine Seitentransformation auf kleinen Bildschirmen */
  }
}
 </style>
  