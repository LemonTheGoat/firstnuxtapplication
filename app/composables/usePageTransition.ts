const transitionName = ref('slide-left')

export function usePageTransition() {
  function setDirection(fromPath: string | undefined, toPath: string) {
    const order = ['/', '/profile']
    const fromIndex = fromPath ? order.indexOf(fromPath) : -1
    const toIndex = order.indexOf(toPath)
    transitionName.value = toIndex > fromIndex ? 'slide-left' : 'slide-right'
  }

  return { transitionName, setDirection }
}
