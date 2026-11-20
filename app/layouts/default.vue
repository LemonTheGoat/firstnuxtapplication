<script setup lang="ts">
const { onPointerDown, onPointerUp, onPointerCancel, onWheel } = useSwipeNavigation()
</script>

<template>
  <div
    class="flex min-h-screen flex-col"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
    @pointercancel="onPointerCancel"
    @wheel.passive="onWheel"
  >
    <Navbar />
    <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <slot />
    </main>
    <footer class="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-card">
      <p class="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:px-6 lg:px-8">
        © {{ new Date().getFullYear() }} Liam Neo C. Salcedo
      </p>
    </footer>

    <MiniCapri />
  </div>
</template>
