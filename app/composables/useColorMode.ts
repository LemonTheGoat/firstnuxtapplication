export function useColorMode() {
  const colorMode = useState<'dark' | 'light'>('color-mode', () => 'dark')

  const isDark = computed(() => colorMode.value === 'dark')

  useHead({
    htmlAttrs: {
      class: computed(() => (isDark.value ? 'dark' : '')),
    },
  })

  onMounted(() => {
    const stored = localStorage.getItem('color-mode')
    if (stored === 'light' || stored === 'dark') {
      colorMode.value = stored
    }
  })

  function toggle() {
    colorMode.value = isDark.value ? 'light' : 'dark'
    localStorage.setItem('color-mode', colorMode.value)
  }

  return { isDark, toggle }
}
