<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Contact from '~/components/Contact.vue'
import ShowcaseCarousel from '~/components/ShowcaseCarousel.vue'

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

    // ScrollTrigger für #effekt-word1
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

    // ScrollTrigger für #effekt-word2
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

    // ScrollTrigger für #effekt-word3
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

    // Ausklappen von #showcase-info1
    ScrollTrigger.create({
      trigger: '#showcase-section',
      start: 'top+=200 center',
      end: 'bottom+=50 center',
      onEnter: () => {
        gsap.to('#showcase-info1', {
          x: 0, 
          duration: 1, 
          ease: 'power2.out' 
        });
      },
      onLeaveBack: () => {
        gsap.to('#showcase-info1', {
          x: -800, 
          duration: 1,
          ease: 'power2.in'
        });
      }
    });

    // #effekt-word3 schneller bewegen
    gsap.timeline({
      scrollTrigger: {
        trigger: '#showcase-section',
        start: 'top+=300 center',
        end: 'top+=600 center',
        scrub: true,
      }
    })
    .fromTo(
      '#effekt-word3',
      { y: 0 },
      { y: -200, duration: 1 }
    )

    // Showcase-Content 1 pinnen 
    ScrollTrigger.create({
      trigger: '#showcase-section',
      start: 'top top', 
      end: 'bottom top', 
      pin: '#showcase-content1',
      pinSpacing: false,
      anticipatePin: 1,
  });

    // Showcase-Content 2 pinnen und einblenden
  ScrollTrigger.create({
      trigger: '#showcase-content2',
      start: 'top top',
      pin: '#showcase-content2',
      pinSpacing: false,
      onEnter: () => {
        gsap.to('#showcase-info2', {
          x: 0, // Entfernt die translateX(-200px) Transformation
          duration: 1, // Dauer der Animation in Sekunden
          ease: 'power2.out' // Easing-Funktion für eine sanfte Animation
        });
        gsap.to('#step2', {
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('#showcase-info2', {
          x: -800, // Setzt die translateX zurück
          duration: 0.6,
          ease: 'power2.in'
        });
        gsap.to('#step2', {
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power2.in'
        });
      },
    });

    // Showcase-Content 1 pinnen 
  ScrollTrigger.create({
      trigger: '#showcase-content3',
      start: 'top top', 
      end: 'bottom top', 
      pin: '#showcase-content2',
      pinSpacing: false,
  });


      // Showcase-Content 3 pinnen und einblenden
  ScrollTrigger.create({
      trigger: '#showcase-content3',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.to('#showcase-info3', {
          x: 0, // Entfernt die translateX(-200px) Transformation
          duration: 1, // Dauer der Animation in Sekunden
          ease: 'power2.out' // Easing-Funktion für eine sanfte Animation
        });
        gsap.to('#step3', {
          autoAlpha: 1,
          duration: 1,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.to('#showcase-info3', {
          x: -800, // Setzt die translateX zurück
          duration: 0.6,
          ease: 'power2.in'
        });
        gsap.to('#step3', {
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power2.in'
        });
      },
    });
  }
</script>

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
      class="word-section text-black z-50"
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

    <!-- 5) Showcase-Section -->
    <section id="showcase-section" class="showcase-section">
      <div id="showcase-content1" class="showcase-content">
        <!-- Linker Bereich (1/3) -->
        <div id="showcase-info1" class="showcase-info">
          <div id="showcase-info-text1" class="showcase-info-text">
            <p class="text-4xl pb-6 text-white font-semibold">Zielgenaue<br />Bewässerung</p>
            <img src="/plantmonitor+plug.png" alt="Showcase Image" class="device-image" />
            <div class="flex flex-col">
              <p class="text-2xl text-white pb-4 font-semibold">Reduziert Sorgen und Wasserbedarf</p>
              <p class="text-2xl text-white font-normal whitespace-normal">Dank Monitoring und intelligenter Steuerung schließt du nicht nur Unterversorgung aus, sondern profitierst auch vom Wasser-Sparpotential einer bedarfsgerechten Tröpfchenbewässerung.</p>
            </div>
          </div>
        </div>
        <!-- Rechter Bereich (2/3) -->
        <div class="image-container">
          <img src="/showcase/1.png" alt="Showcase Image" class="showcase-image absolute" />
          <img src="/showcase/2.png" alt="Showcase Image" id="step2" class="showcase-image absolute invisible" />
          <img src="/showcase/3.png" alt="Showcase Image" id="step3" class="showcase-image absolute invisible" />
          <div class="flex w-full gap-3 flex-col mb-4 mt-auto">
            <div class="flex w-full text-lg font-semibold flex-col">
              <p class="font-normal uppercase py-1 tracking-widest px-10">Monitoring</p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white">
                <div class="flex flex-col w-1/3">
                  <p class="">Feuchtigkeit im Pflanzsubstrat</p>
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
              <p class="font-normal tracking-widest py-1 uppercase px-10">Automatisierung</p>
              <div class="flex flex-row font-medium gap-4 py-2 px-10 bg-lightblue text-white">
                <div class="flex flex-col w-1/3">
                  <p class="">Bewässerung</p>
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
        <div id="showcase-info2" class="showcase-info">
          <div id="showcase-info-text2" class="showcase-info-text">
            <p class="text-4xl pb-6 text-white font-semibold">Nährstoffversorgung<br />ohne Kompromisse</p>
            <div class="flex flex-col">
              <p class="text-2xl text-white pb-4 font-semibold">Tankmonitor</p>
              <p class="text-2xl text-white font-normal whitespace-normal">Um sichere Automatisierung zu gewährleisten, wird der Nährstofftank zu jeder Zeit durch Radar und Messsonden überwacht.</p>
            </div>
            <div class="flex flex-col">
              <p class="text-2xl text-white pb-4 font-semibold">Nährstoffcontroller</p>
              <p class="text-2xl text-white font-normal whitespace-normal">Drei Komponenten eines Düngemittelsystems und Zwei Ph-Korrerkturlösungen werden bei Bedarf automatisch infundiert.</p>
            </div>
          </div>
        </div>
        <!-- Rechter Bereich (2/3) -->
        <div class="image-container invisible">
          <img src="/showcase/2.png" alt="Showcase Image" class="showcase-image" />
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

      <!-- Content3 -->
      <div id="showcase-content3" class="showcase-content">
        <!-- Linker Bereich (1/3) -->
        <div id="showcase-info3" class="showcase-info">
          <div id="showcase-info-text3" class="showcase-info-text">
            <p class="text-4xl pb-6 text-white font-semibold">Volle Kontrolle?<br />Kein Problem!</p>
            <img src="/climatemonitor+plug.png" alt="Showcase Image" class="device-image max-w-sm" />
            <div class="flex flex-col">
              <p class="text-2xl text-white pb-4 font-semibold">Ganzjährig bestes Klima</p>
              <p class="text-2xl text-white font-normal whitespace-normal">Ob Indoor oder im isolierten Gewächshaus, unser System übernimmt die Regulierung des Klimas, abgestimmt auf deine Pflanzen. Unsere SmartPlugs ermöglichen das Einbinden analoger Geräte. Außerdem können smarte Geräte wie Thermostate oder Abluftventilatoren eingebunden werden. </p>
            </div>
          </div>
        </div>
        <!-- Rechter Bereich (2/3) -->
        <div class="image-container invisible">
          <img src="/showcase/3.png" alt="Showcase Image" class="showcase-image" />
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

    <section>
      <ShowcaseCarousel />
    </section>

    <section class="flex flex-col h-screen">
      <div class="flex flex-col bg-secondary text-white">
        <p class="text-4xl font-semibold mt-6 mb-8 text-center justify-top">Vorteile auf einen Blick</p> 
      </div>
      <div class="grid grid-cols-4 mt-12 gap-20 grid-rows-2 rounded-xl grow ml-20 mr-10 text-left text-green-700">
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/1.svg" alt="Benefit 1 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Hybrides Monitoring</p>
          <p class="text-xl mt-1 font-medium">Messung und Auswertung aller relevanten Einflussfaktoren</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/2.svg" alt="Benefit 2 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Automatische Versorgung</p>
          <p class="text-xl mt-1 font-medium">Kabellose, modulare Plug and Play Automatisierung</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/3.svg" alt="Benefit 3 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Intelligente Gartenassistenz</p>
          <p class="text-xl mt-1 font-medium">Interaktiv angeleitet, ohne Vorwissen, erfolgreich kultivieren</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/4.svg" alt="Benefit 4 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Smarthome Prinzip</p>
          <p class=" text-xl mt-1 font-medium">Kabellos, flexibel, unkompliziert, erweiterbar, günstig</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/5.svg" alt="Benefit 5 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Zeitersparnis</p>
          <p class="text-xl mt-1 font-medium">Weniger Zeit und Mühe, dafür mehr Zeit zum genießen</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/6.svg" alt="Benefit 6 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Mehr Ertrag</p>
          <p class="text-xl mt-1 font-medium">Egal was du ernten willst, wir machen einfach mehr daraus</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/7.svg" alt="Benefit 7 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Versorgung in Abwesenheit</p>
          <p class="text-xl mt-1 font-medium">Erfolgreich im Garten, trotz flexiblen Lebensstil</p>
        </div>
        <div class="flex flex-col">
          <div class="benefit">
            <img src="/benefit/8.svg" alt="Benefit 8 Image" class="" />
          </div>
          <p class="text-2xl mt-4 font-bold">Keine Sorgen mehr</p>
          <p class="text-xl mt-1 font-medium">Nix ist sicher aber deine Pflanzen sind nah dran</p>
        </div>
      </div>
    </section>

    <Contact />

    <footer class="flex flex-col text-lg text-stone-300 bg-green-900 mt-12 pt-6">
      <div class="flex justify-center gap-20 mb-4">
        <div class="flex grow" />
        <div class="flex flex-col grow items-center">
          <div class="flex flex-col items-start w-60">
            <span class="mb-2 uppercase text-sm text-gray-400">Rechtliches</span>
            <NuxtLink href="https://plantomio.com/impressum" class="mb-2 hover:underline">Impressum</NuxtLink>
            <NuxtLink href="https://plantomio.com/datenschutz" class="hover:underline">Datenschutz</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col grow items-center">
          <div class="flex flex-col items-start w-60">
            <span class="mb-2 uppercase text-sm text-gray-400">Kontakt</span>
            <a href="mailto:kontakt@plantomio.com" class="mb-2 hover:underline">team@plantomio.de</a>
            <a class="">+49 157 87351403</a>
          </div>
        </div>
        <div class="flex grow" />
      </div> 
      <!-- Copyright -->
      <p class="text-center">&copy; 2025 Plantomio UG</p>
    </footer>
  </div>
</template>

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
  margin: 0 0 100vh 0;
}

.showcase-content {
  display: flex;
  width: 100%;
}

/* Linker Bereich (1/3) */
.showcase-info {
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

.showcase-image {
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

.bg-secondary {
  background-color: #68b34b;
}

.smallShowcase, .largeShowcase {
    max-height: 75vh;
    width: auto;
    object-fit: contain;
    margin: 0 auto;
}

.benefit {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 50%;
  margin-bottom: 2%;
}

.bg-lightblue {
  background-color: #8aaabd;
}

/* Responsive Verhalten */
@media (max-width: 768px) {
  .showcase-content {
    flex-direction: column;
  }

  .showcase-info {
    transform: translateX(0); /* Keine Seitentransformation auf kleinen Bildschirmen */
  }
}
 </style>
  