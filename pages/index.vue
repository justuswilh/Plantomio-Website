<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useAsyncData } from 'nuxt/app'

// Fetch the current route
const route = useRoute()

// Asynchronously fetch the page data based on the route path
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path('/home').first()
})

function extractSection(body, sectionTitle) {
  console.log('Extracting section', sectionTitle, 'from', body)
  
  if (!body || !body.value) return { type: 'minimal', value: [] }

  const sections = {}
  let currentSection = null

  body.value.forEach(node => {
    const [tag, props, content] = node

    if (tag === 'h2') {
      currentSection = content
      sections[currentSection] = []
    } else if (currentSection) {
      sections[currentSection].push(node)
    }
  })

  return { type: 'minimal', value: sections[sectionTitle] || [] }
}


// Computed properties for each section
const picture1 = computed(() => extractSection(page.value?.body, 'Picture1'))
const überschrift1 = computed(() => extractSection(page.value?.body, 'überschrift1'))
</script>

<template>
  <div v-if="picture1.value.length" class="flex mt-24 justify-center">
    <ContentRenderer :value="picture1" />
  </div>
  <!-- Spezifische Abschnitte rendern, falls vorhanden -->
  <div v-if="überschrift1.value.length" class="flex mt-24 justify-center text-3xl">
    <ContentRenderer :value="überschrift1" />
  </div>
  
</template>