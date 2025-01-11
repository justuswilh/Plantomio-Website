<script setup lang="ts">
import { reactive } from 'vue'
import type { FormSubmitEvent } from '#ui/types'

// Initialer Zustand des Formulars
const form = reactive({
  newsletter: true,
  betaProgram: false,
  name: '',
  nachname: '',
  email: '',
})

// Formular-Submit-Funktion
async function onSubmit(event: FormSubmitEvent<typeof form>) {
  // Hier können Sie die Formularwerte verarbeiten, z.B. an einen Server senden
  console.log('Formular abgesendet:', { ...form })

  // Bestätigung anzeigen
  alert('Vielen Dank für Ihre Anmeldung zur Closed Beta!')

  // Formular zurücksetzen
  form.newsletter = true
  form.betaProgram = false
  form.name = ''
  form.nachname = ''
  form.email = ''
}
</script>

<template>
  <div class="container flex flex-col mx-auto overflow-hidden rounded-xl border-1 border-green-600 m-6 justify-center">
    <div class="flex flex-col bg-secondary text-white">
      <p class="text-4xl font-semibold mt-3 mb-4 text-center justify-top"> Newsletter und Betha Phase </p>
    </div>
    <Progress class="mt-10 mb-2" />
    <p class="text-xl leading-loose font-semibold mt-4 mb-4 text-center justify-top">
      Unsere Betha Phase hat begonnen! <br /> Interessierte können bereits jetzt die Vorteile smarter Pflanzenversorgung erfahren. <br /> Unser Newsletter hält dich auf dem Laufenden ohne zu stressen. <br /> Wir schreiben dir nur bei relevanten Fortschritten.
    </p>

    <div class="flex flex-col justify-center mb-6 mx-auto">
      <UForm :state="form" @submit="onSubmit">
        <div class="flex flex-row gap-6 justify-center">
          <!-- Checkboxes -->
          <UFormField name="newsletter">
            <UCheckbox v-model="form.newsletter" label="Newsletter abonieren" size="xl" />
          </UFormField>

          <UFormField name="betaProgram">
            <UCheckbox v-model="form.betaProgram" label="Interesse am Beta-Programm" size="xl" />
          </UFormField>
        </div>

        <div class="flex flex-row gap-6 mt-6 justify-center">
          <!-- Name -->
          <UFormField label="Name" name="name" size="xl" required>
            <UInput v-model="form.name" placeholder="Ihr Vorname" />
          </UFormField>

          <!-- Nachname -->
          <UFormField label="Nachname" size="xl" name="nachname">
            <UInput v-model="form.nachname" placeholder="Ihr Nachname" />
          </UFormField>

          <!-- E-Mail -->
          <UFormField label="E-Mail" name="email" size="xl" required>
            <UInput v-model="form.email" type="email" placeholder="Ihre E-Mail-Adresse" />
          </UFormField>
        </div>
        <div class="flex justify-center mt-10">
          <!-- Submit Button -->
          <UButton type="submit" color="primary" size="xl">
            Absenden
          </UButton>
        </div>
        <p class="text-center mt-8"> Mit dem Absenden des Formulars erkläre ich mich mit den Datenschutzbestimmungen einverstanden.</p>
      </UForm>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
}

.bg-secondary {
  background-color: #68b34b;
}
</style>
