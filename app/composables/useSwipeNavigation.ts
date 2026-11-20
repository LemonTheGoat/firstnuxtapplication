export function useSwipeNavigation() {
  const route = useRoute()
  const router = useRouter()

  const SWIPE_THRESHOLD = 60
  let startX = 0
  let startY = 0
  let lastWheel = 0

  function go(direction: 'left' | 'right') {
    if (direction === 'left' && route.path === '/') {
      router.push('/profile')
    } else if (direction === 'right' && route.path === '/profile') {
      router.push('/')
    }
  }

  function onTouchStart(e: TouchEvent) {
    const touch = e.touches[0]
    startX = touch.clientX
    startY = touch.clientY
  }

  function onTouchEnd(e: TouchEvent) {
    const touch = e.changedTouches[0]
    const dx = touch.clientX - startX
    const dy = touch.clientY - startY
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    go(dx < 0 ? 'left' : 'right')
  }

  function onWheel(e: WheelEvent) {
    if (Math.abs(e.deltaX) < 40 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
    const now = Date.now()
    if (now - lastWheel < 400) return
    lastWheel = now
    go(e.deltaX > 0 ? 'left' : 'right')
  }

  return { onTouchStart, onTouchEnd, onWheel }
}
