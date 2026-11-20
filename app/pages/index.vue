<script setup lang="ts">
useSeoMeta({
  title: 'Home — Liam Neo C. Salcedo',
  description:
    'Personal profile of Liam Neo C. Salcedo, a 3rd-year BSIT student at Caraga State University.',
})
</script>

<template>
  <section class="flex flex-col items-center gap-8 py-6 text-center sm:py-10">
    <div class="relative">
      <div class="avatar-ring rounded-full p-1 shadow-[0_0_40px_rgba(255,30,110,0.35)]">
        <img
          src="/avatar.jpg"
          alt="Portrait of Liam Neo C. Salcedo"
          width="192"
          height="192"
          class="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
        />
      </div>
      <span
        class="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)] dark:border-ink"
        aria-hidden="true"
      ></span>
    </div>

    <div class="space-y-4">
      <p class="text-sm font-semibold uppercase tracking-widest text-primary">
        Welcome to my profile
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Liam Neo C. Salcedo
      </h1>
      <p class="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        3rd-year BS Information Technology student at Caraga State University who enjoys
        building clean web interfaces, customizing Linux systems, and competitive powerlifting.
      </p>
    </div>

    <div class="flex flex-col items-center gap-3">
      <NuxtLink
        to="/profile"
        class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,30,110,0.45)] transition-all hover:bg-primary-deep"
      >
        View my full profile
        <span aria-hidden="true">→</span>
      </NuxtLink>

      <a
        href="https://github.com/LemonTheGoat"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-card dark:text-zinc-300 dark:hover:border-primary/60"
      >
        <svg viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4" aria-hidden="true">
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
          />
        </svg>
        GitHub
      </a>
    </div>
  </section>
</template>
