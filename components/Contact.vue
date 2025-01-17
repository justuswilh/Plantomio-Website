<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import * as v from 'valibot'
import { reactive } from 'vue'

// Definiere das Validierungsschema
const schema = v.object({
  newsletter: v.boolean(),
  betaProgram: v.boolean(),
  name: v.pipe(v.string(), v.minLength(1, 'Name ist erforderlich')),
  nachname: v.pipe(v.string(), v.minLength(1, 'Nachname ist erforderlich')),
  email: v.pipe(v.string(), v.email('Ungültige E-Mail-Adresse')),
  text: v.string(),
})

// Inferenz des Schematyps
type Schema = v.InferOutput<typeof schema>

// Reaktiver Zustand des Formulars
const form = reactive<Schema>({
  newsletter: false,
  betaProgram: false,
  name: '',
  nachname: '',
  email: '',
  text: '',
})

// Reaktiver Zustand für Validierungsfehler
const errors = reactive<Record<keyof Schema, string | null>>({
  newsletter: null,
  betaProgram: null,
  name: null,
  nachname: null,
  email: null,
  text: null,
})

// Reaktiver Zustand für die Bestätigungsnachricht
const confirmationMessage = reactive<{ text: string | null }>({
  text: null,
})

// Formular-Submit-Funktion mit Validierung
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    // Debugging: Überprüfen Sie die empfangenen Daten
    console.log('Empfangene Daten:', event.data)

    // 1) E-Mail-Domain-Validierung (optional, wie gehabt)
    const emailResponse = await fetch('/api/validate-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: form.email }),
    })

    const emailResult = await emailResponse.json()

    if (!emailResponse.ok) {
      // Setze den Fehler für das E-Mail-Feld
      errors.email = emailResult.message || 'Ungültige E-Mail-Domain.'
      return
    }

    // Wenn Validierung erfolgreich ist, setze alle Fehler zurück
    Object.keys(errors).forEach((key) => {
      errors[key as keyof Schema] = null
    })

    // 2) Formular an den send-form-Endpoint schicken
    const sendFormResponse = await fetch('/api/send-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form), // Sende genau die Felder: newsletter, betaProgram, name, nachname, email
    })
    const sendFormResult = await sendFormResponse.json()

    if (!sendFormResponse.ok) {
      // Server hat geantwortet, aber mit Fehlerstatus
      console.error('Fehler beim Versenden des Formulars:', sendFormResult)
      errors.text = sendFormResult.statusMessage || 'Fehler beim Senden der E-Mail.'
      return
    }

    console.log('Formular abgesendet (sendFormResult):', sendFormResult)

    // Bestätigungsnachricht setzen
    confirmationMessage.text = sendFormResult.message

    // Formular zurücksetzen
    form.newsletter = true
    form.betaProgram = false
    form.name = ''
    form.nachname = ''
    form.email = ''
  }
  catch (error) {
    console.error('Ein unerwarteter Fehler ist aufgetreten:', error)
    errors.email = 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.'
  }
}
</script>

<template>
  <div class="container flex flex-col mx-auto overflow-hidden rounded-xl border-1 border-green-600 m-6 justify-center">
    <div class="flex flex-col bg-primary text-white">
      <p class="text-4xl font-semibold mt-3 mb-4 text-center justify-top">
        Newsletter und Beta Phase
      </p>
    </div>
    <Progress class="mt-10 mb-2" />
    <p class="text-xl leading-loose font-semibold mt-4 mb-4 text-center justify-top">
      Unsere Beta Phase hat begonnen! <br>
      Interessierte können bereits jetzt die Vorteile smarter Pflanzenversorgung
      erfahren. <br>
      Unser Newsletter hält dich auf dem Laufenden ohne zu stressen. <br>
      Wir schreiben dir nur bei relevanten Fortschritten.
    </p>

    <div class="flex flex-col justify-center mb-6 mx-auto">
      <!-- Entfernen Sie die :schema-Bindung und verwenden stattdessen "v.safeParser(schema)" -->
      <UForm :schema="v.safeParser(schema)" :state="form" class="space-y-4" @submit="onSubmit">
        <div class="flex flex-row gap-6 justify-center">
          <!-- Checkboxes -->
          <UFormField name="newsletter">
            <UCheckbox v-model="form.newsletter" label="Newsletter abonnieren" size="xl" />
          </UFormField>
          <UFormField name="betaProgram">
            <UCheckbox v-model="form.betaProgram" label="Interesse am Beta-Programm" size="xl" />
          </UFormField>
        </div>
        <p v-if="errors.text" class="text-red-500 text-sm text-center mt-1">
          {{ errors.text }}
        </p>
        <div class="text-inpust-fields gap-6 mt-6">
          <!-- Name -->
          <UFormField label="Name" name="name" size="xl" required>
            <UInput v-model="form.name" placeholder="Ihr Vorname" />
            <!-- Fehleranzeige für Name -->
            <p v-if="errors.name" class="text-red-500 static text-sm mt-1">
              {{ errors.name }}
            </p>
          </UFormField>

          <!-- Nachname -->
          <UFormField label="Nachname" size="xl" name="nachname" required>
            <UInput v-model="form.nachname" placeholder="Ihr Nachname" />
            <!-- Fehleranzeige für Nachname -->
            <p v-if="errors.nachname" class="text-red-500 text-sm mt-1">
              {{ errors.nachname }}
            </p>
          </UFormField>

          <!-- E-Mail -->
          <UFormField label="E-Mail" name="email" size="xl" required>
            <UInput v-model="form.email" type="email" placeholder="Ihre E-Mail-Adresse" />
            <!-- Fehleranzeige für E-Mail -->
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">
              {{ errors.email }}
            </p>
          </UFormField>
        </div>

        <div class="flex justify-center mt-10">
          <!-- Submit Button -->
          <UButton type="submit" color="primary" size="xl">
            Absenden
          </UButton>
        </div>
        <!-- Bestätigungsnachricht -->
        <p v-if="confirmationMessage.text" class="text-primary text-xl mt-4 text-center">
          {{ confirmationMessage.text }}
        </p>
        <p class="text-center mt-8">
          Mit dem Absenden des Formulars erkläre ich mich mit den
          <NuxtLink to="/datenschutz" class="font-medium hover:underline">
            Datenschutzbestimmungen
          </NuxtLink> einverstanden.
        </p>
      </UForm>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 10vh auto;
}

/* Styling für Fehlernachrichten */
.text-red-500 {
  color: #f56565;
}

/* Styling für Bestätigungsnachricht */
.text-green-500 {
  color: #48bb78;
}

.text-inpust-fields {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media (max-width: 768px) {
  .container {
    width: 98%;
  }

  .text-inpust-fields {
    flex-direction: column;
    align-items: center;
  }
}
</style>
