<script>
export default {
  name: 'PlantomioPlaceholder',
}
definePageMeta({
  layout: 'shop', // hier den Dateinamen ohne .vue
})
</script>

<template>
  <div class="placeholder">
    <h1>Coming soon...</h1>
    <p>Hier stehen bald ganz viele tolle Sachen!</p>
  </div>
</template>

  <style scoped>
  .placeholder {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #555;
  }
  </style>
