<template>
    <footer>
      <p>{{ text }}</p>
    </footer>
  </template>
  
  <script setup>
  const props = defineProps({
    text: String
  })
  </script>