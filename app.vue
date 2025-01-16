<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage content="width=device-width, initial-scale=1.0" />
    </NuxtLayout>
  </UApp>
</template>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';



.bg-secondary {
  background-color: #58ab3a;
}

.bg-primary {
  background-color: #3f8b24;
}

.bg-footer {
  background-color: #266011;
}

.text-primary {
  color: #298407;
}

.lightblue {
  color: #8aaabd;
}

.bg-lightblue {
  background-color: lightblue;
}

:root {
  --ui-primary: #0e9402;
  --ui-secondary: var(--ui-color-secondary-500);
  --ui-success: var(--ui-color-success-500);
  --ui-info: var(--ui-color-info-500);
  --ui-warning: var(--ui-color-warning-500);
  --ui-error: var(--ui-color-error-500);
}

</style>