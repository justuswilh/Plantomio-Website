<script setup></script>

<template>
  <header class="bg-gray-50 text-black">
    <nav class="container mx-auto flex text-xl font-bold justify-between text-center items-center py-1 px-6">
      <img src="~/public/logo_banner.svg" alt="Plantomio Logo" class="h-20">
      <ul class="flex items-center space-x-6">
        <li>
          <nuxt-link
            to="/"
            exact-active-class="activePath"
            class="hover px-3 py-2 rounded transition-colors duration-300"
          >
            Startseite
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/automatisierung"
            exact-active-class="activePath"
            class="hover px-3 py-2 rounded transition-colors duration-300"
          >
            Automatisierung
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/produkte"
            exact-active-class="activePath"
            class="hover px-3 py-2 rounded transition-colors duration-300"
          >
            Produkte
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/bundle"
            exact-active-class="activePath"
            class="hover px-3 py-2 rounded transition-colors duration-300"
          >
            Bundle
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/plantomio"
            exact-active-class="activePath"
            class="hover px-3 py-2 rounded transition-colors duration-300"
          >
            Plantomio
          </nuxt-link>
        </li>
        <li>
          <UIcon name="i-material-symbols:shopping-bag-outline" class="size-8 hover px-12 py-2 rounded transition-colors duration-300" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.activePath {
  color: #298407;
}
.hover:hover
{
  color: #298407;
}
</style>
