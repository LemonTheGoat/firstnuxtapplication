export default defineNuxtRouteMiddleware((to, from) => {
  const { setDirection } = usePageTransition()
  setDirection(from?.path, to.path)
})
