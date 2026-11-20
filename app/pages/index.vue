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
      <img
        src="/avatar.jpg"
        alt="Portrait of Liam Neo C. Salcedo"
        width="192"
        height="192"
        class="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-48 sm:w-48"
      />
      <span
        class="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500"
        aria-hidden="true"
      ></span>
    </div>

    <div class="space-y-4">
      <p class="text-sm font-semibold uppercase tracking-widest text-sky-600">
        Welcome to my profile
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Liam Neo C. Salcedo
      </h1>
      <p class="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
        3rd-year BS Information Technology student at Caraga State University who enjoys
        building clean web interfaces, customizing Linux systems, and competitive powerlifting.
      </p>
    </div>

    <NuxtLink
      to="/profile"
      class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700"
    >
      View my full profile
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </section>
</template>
