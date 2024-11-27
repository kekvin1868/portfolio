<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useHead({
  title: 'portfolio.',
  meta: [
    { name: 'description', content: 'my personal profile website.' }
  ]
})
</script>