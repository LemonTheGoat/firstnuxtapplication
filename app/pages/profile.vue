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
  'Music',
  'Photography & Astrophotography',
  'Operating Systems',
  'Gaming',
  'Linux',
  'Anime',
]
</script>

<template>
  <div class="space-y-8">
    <header class="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
      <img
        src="/avatar.jpg"
        alt="Portrait of Liam Neo C. Salcedo"
        width="96"
        height="96"
        class="h-24 w-24 rounded-full object-cover shadow-md ring-4 ring-white"
      />
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Liam Neo C. Salcedo
        </h1>
        <p class="mt-1 text-slate-600">BSIT Student & Freelance Creative</p>
      </div>
    </header>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Personal Information</h2>
      <dl class="mt-4 divide-y divide-slate-100">
        <div
          v-for="item in personalInfo"
          :key="item.label"
          class="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:gap-6"
        >
          <dt class="w-full text-sm font-medium text-slate-500 sm:w-40 sm:shrink-0">
            {{ item.label }}
          </dt>
          <dd class="text-sm font-medium text-slate-900">{{ item.value }}</dd>
        </div>
      </dl>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Educational Background</h2>
      <div class="mt-4 space-y-4">
        <div
          v-for="(item, index) in education"
          :key="index"
          class="rounded-xl bg-slate-50 p-4"
        >
          <p class="font-medium text-slate-900">{{ item.title }}</p>
          <p class="mt-1 text-sm text-slate-600">{{ item.subtitle }}</p>
        </div>
      </div>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Skills and Interests</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="skill in skills"
          :key="skill"
          class="rounded-full bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 ring-1 ring-inset ring-sky-200"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 class="text-lg font-semibold text-slate-900">Hobbies</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li
          v-for="hobby in hobbies"
          :key="hobby"
          class="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
        >
          {{ hobby }}
        </li>
      </ul>
    </section>
  </div>
</template>
