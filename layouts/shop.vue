<template>
  <div class="flex flex-col bg-white min-h-screen">
    <Header />
    <main class="flex flex-col grow  max-w-screen text-black">
      <slot />
      <IndividualProdukdetail />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main {
  padding: 4vh 10vh;
}
</style>
