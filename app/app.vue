<script setup lang="ts">
const { transitionName } = usePageTransition()

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap',
    },
  ],
})

const pageTransition = computed<{ name: string; mode: 'out-in' }>(() => ({
  name: transitionName.value,
  mode: 'out-in',
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
</template>
