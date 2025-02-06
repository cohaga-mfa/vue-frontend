<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useFetch } from '@vueuse/core'

const { data, error, isFetching } = useFetch('http://0.0.0.0:8000/api/user').get();
</script>

<template>
  <main>
    <TheWelcome />
    <div>
    <p v-if="isFetching">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div v-else>
      {{ data }}
    </div>
    </div>
  </main>
</template>
