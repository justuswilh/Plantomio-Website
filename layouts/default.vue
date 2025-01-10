<template>
  <div class="flex flex-col bg-white min-h-screen">
    <div class="flex flex-row items-start grow">
      <main class="flex grow max-w-full text-black with-100 items-center">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Zusätzliche Stile für das Layout */
</style>
