<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
    <Navbar />
    <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <slot />
    </main>
    <footer class="border-t border-slate-200 bg-white">
      <p class="mx-auto max-w-4xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {{ new Date().getFullYear() }} Liam Neo C. Salcedo
      </p>
    </footer>
  </div>
</template>
