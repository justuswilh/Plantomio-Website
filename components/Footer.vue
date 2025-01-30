<template>
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
</template>
