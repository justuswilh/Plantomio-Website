<template>
  <div class="flex flex-col bg-white min-h-screen">
    <div class="flex flex-row items-start grow">
      <main class="flex grow w-screen text-black">
        <slot />
      </main>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Optional: Zusätzliche Stile für das Layout */
</style>
