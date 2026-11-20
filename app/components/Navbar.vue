<script setup lang="ts">
const route = useRoute()

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/profile', label: 'Profile', exact: false },
]

function linkClass(path: string, exact: boolean) {
  const isActive = exact ? route.path === path : route.path.startsWith(path)
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-sky-600 text-white shadow-sm'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  ]
}
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
    <nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="text-lg font-bold tracking-tight text-slate-900">
        Liam<span class="text-sky-600">.dev</span>
      </NuxtLink>

      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" :class="linkClass(link.to, link.exact)">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
