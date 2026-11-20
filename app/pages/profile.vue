<script setup lang="ts">
useSeoMeta({
  title: 'Profile — Liam Neo C. Salcedo',
  description:
    'Personal information, education, skills, and hobbies of Liam Neo C. Salcedo.',
})

const personalInfo = [
  { label: 'Full Name', value: 'Liam Neo C. Salcedo' },
  { label: 'Age', value: '20' },
  { label: 'Location', value: 'Butuan City, Agusan del Norte, Philippines' },
  { label: 'Role', value: 'BSIT Student & Freelance Creative' },
]

const education = [
  {
    title: 'Bachelor of Science in Information Technology (3rd Year)',
    subtitle: 'Caraga State University Main Campus',
  },
]

const skills = [
  'Web Development (Nuxt, Vue, Tailwind CSS, HTML/CSS)',
  'Linux System Administration',
  'UI/Graphic Design',
  'Database Design',
]

const hobbies = [
  'Powerlifting',
  'Arm Wrestling',
  'Photography & Astrophotography',
  'Motorcycle Maintenance',
  'Gaming',
]

const cardClass =
  'rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(255,30,110,0.18)] dark:border-zinc-800 dark:bg-card sm:p-8'
</script>

<template>
  <div class="space-y-8">
    <header class="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
      <div class="avatar-ring rounded-full p-1 shadow-[0_0_30px_rgba(255,30,110,0.3)]">
        <img
          src="/avatar.jpg"
          alt="Portrait of Liam Neo C. Salcedo"
          width="96"
          height="96"
          class="h-24 w-24 rounded-full object-cover"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Liam Neo C. Salcedo
        </h1>
        <p class="mt-1 text-zinc-600 dark:text-zinc-400">BSIT Student & Freelance Creative</p>
      </div>
    </header>

    <section :class="cardClass">
      <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Personal Information</h2>
      <dl class="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800">
        <div
          v-for="item in personalInfo"
          :key="item.label"
          class="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:gap-6"
        >
          <dt class="w-full text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:w-40 sm:shrink-0">
            {{ item.label }}
          </dt>
          <dd class="text-sm font-medium text-zinc-900 dark:text-zinc-100">{{ item.value }}</dd>
        </div>
      </dl>
    </section>

    <section :class="cardClass">
      <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Educational Background</h2>
      <div class="mt-4 space-y-4">
        <div
          v-for="(item, index) in education"
          :key="index"
          class="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-4 dark:bg-emerald-400/10"
        >
          <p class="font-medium text-zinc-900 dark:text-zinc-100">{{ item.title }}</p>
          <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{{ item.subtitle }}</p>
        </div>
      </div>
    </section>

    <section :class="cardClass">
      <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Skills and Interests</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="skill in skills"
          :key="skill"
          class="rounded-full border border-emerald-500/40 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 transition-all duration-200 hover:border-emerald-400 hover:shadow-[0_0_16px_rgba(16,185,129,0.35)] dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-300"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <section :class="cardClass">
      <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Hobbies</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="hobby in hobbies"
          :key="hobby"
          class="rounded-full border border-cyan-500/40 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 transition-all duration-200 hover:border-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,238,0.35)] dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-300"
        >
          {{ hobby }}
        </li>
      </ul>
    </section>
  </div>
</template>
