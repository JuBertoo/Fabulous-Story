// export default defineNuxtRouteMiddleware((to, _from) => {
//   console.log('auth', to)
//   const user = useStrapiUser()
//   if (!user.value) {
//     useCookie('redirect', { path: '/' }).value = to.fullPath
//     return navigateTo('/login')
//   }
// })
