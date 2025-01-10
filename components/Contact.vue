<script setup lang="ts">
import { useCookie } from 'nuxt/app'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

interface FormError {
  name: string
  message: string
}

const state = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
})

const errors = ref<FormError[]>([])
const loading = ref(false)
const isRegisterMode = ref(false) // Umschalten zwischen Login und Registrierung

const router = useRouter()
const authToken = useCookie('authToken')

function validate(state: typeof state): FormError[] {
  const validationErrors: FormError[] = []
  if (!state.username) {
    validationErrors.push({ name: 'username', message: 'Benutzername ist erforderlich.' })
  }
  if (!state.password) {
    validationErrors.push({ name: 'password', message: 'Passwort ist erforderlich.' })
  }
  if (isRegisterMode.value) {
    if (!state.email) {
      validationErrors.push({ name: 'email', message: 'E-Mail ist erforderlich.' })
    }
    if (!state.confirmPassword) {
      validationErrors.push({ name: 'confirmPassword', message: 'Bestätigungs-Passwort ist erforderlich.' })
    }
    if (state.password !== state.confirmPassword) {
      validationErrors.push({ name: 'confirmPassword', message: 'Passwörter stimmen nicht überein.' })
    }
  }
  return validationErrors
}

function getErrorMessage(fieldName: string): string | null {
  const fieldError = errors.value.find(error => error.name === fieldName)
  return fieldError ? fieldError.message : null
}

async function handleLogin() {
  loading.value = true
  errors.value = []

  const validationErrors = validate(state)
  if (validationErrors.length > 0) {
    errors.value = validationErrors
    loading.value = false
    return
  }

  try {
    if (isRegisterMode.value) {
      // Benutzer erstellen
      await createUser(state.username, state.password, state.confirmPassword, state.email)
      console.log('Benutzer erfolgreich angelegt.')

      // Benutzer automatisch einloggen
      await login(state.username, state.password)
      const token = authToken.value
      if (token) {
        console.log('Login erfolgreich, Token gespeichert:', token)
      }

      // Weiterleitung nach erfolgreichem Login
      router.push('/plantsOverview')
    }
    else {
      // Bestehenden Benutzer einloggen
      await login(state.username, state.password)
      const token = authToken.value
      if (token) {
        console.log('Login erfolgreich, Token gespeichert:', token)
      }
      router.push('/plantsOverview')
    }
  }
  catch (err: any) {
    errors.value.push({ name: 'general', message: err.message || 'Fehler beim Prozess. Bitte versuchen Sie es erneut.' })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-white flex items-center flex-col grow">
    <div class="form-container">
      <div class="bg-green-500 text-white text-center rounded-lg mb-2 shadow-md">
        <h2 class="text-xl font-bold">
          {{ isRegisterMode ? 'Benutzer anlegen' : 'Login' }}
        </h2>
      </div>

      <div class="p-4 text-black">
        <UForm :validate="validate" :state="state" class="mb-2" @submit.prevent="handleLogin">
          <UFormField label="Benutzername" name="username">
            <UInput
              v-model="state.username"
              placeholder="Geben Sie Ihren Benutzernamen ein"
              required
              :class="{ 'border-red-500': getErrorMessage('username') }"
            />
            <div v-if="getErrorMessage('username')" class="field-error">
              {{ getErrorMessage('username') }}
            </div>
          </UFormField>

          <UFormField label="Passwort" name="password">
            <UInput
              v-model="state.password"
              type="password"
              placeholder="Geben Sie Ihr Passwort ein"
              required
              :class="{ 'border-red-500': getErrorMessage('password') }"
            />
            <div v-if="getErrorMessage('password')" class="field-error">
              {{ getErrorMessage('password') }}
            </div>
          </UFormField>

          <UFormField v-if="isRegisterMode" label="Passwort bestätigen" name="confirmPassword">
            <UInput
              v-model="state.confirmPassword"
              type="password"
              placeholder="Bestätigen Sie Ihr Passwort"
              required
              :class="{ 'border-red-500': getErrorMessage('confirmPassword') }"
            />
            <div v-if="getErrorMessage('confirmPassword')" class="field-error">
              {{ getErrorMessage('confirmPassword') }}
            </div>
          </UFormField>

          <UFormField v-if="isRegisterMode" label="E-Mail" name="email">
            <UInput
              v-model="state.email"
              type="email"
              placeholder="Geben Sie Ihre E-Mail ein"
              required
              :class="{ 'border-red-500': getErrorMessage('email') }"
            />
            <div v-if="getErrorMessage('email')" class="field-error">
              {{ getErrorMessage('email') }}
            </div>
          </UFormField>

          <UButton type="submit" class="mt-4" :disabled="loading" block>
            {{ loading ? 'Verarbeiten...' : (isRegisterMode ? 'Benutzer anlegen' : 'Login') }}
          </UButton>
        </UForm>

        <div v-if="getErrorMessage('general')" class="error">
          {{ getErrorMessage('general') }}
        </div>
      </div>
    </div>
    <UButton class="mt-4 w-48" block @click="isRegisterMode = !isRegisterMode">
      {{ isRegisterMode ? 'Zurück zum Login' : 'Benutzer anlegen' }}
    </UButton>
  </div>
</template>

<style scoped>
.form-container {
  margin: 5rem auto;
  border: 1px solid #22c55e;
  border-radius: 8px;
}

.field-error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.error {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
