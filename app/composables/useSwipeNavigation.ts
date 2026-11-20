export function useSwipeNavigation() {
  const route = useRoute()
  const router = useRouter()

  const SWIPE_THRESHOLD = 60
  let startX = 0
  let startY = 0
  let pointerId: number | null = null
  let lastWheel = 0

  function go(direction: 'left' | 'right') {
    if (direction === 'left' && route.path === '/') {
      router.push('/profile')
    } else if (direction === 'right' && route.path === '/profile') {
      router.push('/')
    }
  }

  function onPointerDown(e: PointerEvent) {
    if (pointerId !== null) return
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerId = e.pointerId
    startX = e.clientX
    startY = e.clientY
  }

  function onPointerUp(e: PointerEvent) {
    if (pointerId !== e.pointerId) return
    pointerId = null
    const dx = e.clientX - startX
    const dy = e.clientY - startY
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    go(dx < 0 ? 'left' : 'right')
  }

  function onPointerCancel() {
    pointerId = null
  }

  function onWheel(e: WheelEvent) {
    if (Math.abs(e.deltaX) < 40 || Math.abs(e.deltaX) < Math.abs(e.deltaY)) return
    const now = Date.now()
    if (now - lastWheel < 400) return
    lastWheel = now
    go(e.deltaX > 0 ? 'left' : 'right')
  }

  return { onPointerDown, onPointerUp, onPointerCancel, onWheel }
}
