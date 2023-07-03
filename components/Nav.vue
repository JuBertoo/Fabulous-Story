<!-- <template>
  <div
    class="flex space-x-5 items-center justify-center bg-black text-white py-3 sm:py-5"
  >
    <NuxtLink to="/">Histoire</NuxtLink>
    <div v-if="!user">
      <NuxtLink class="border-r px-3" to="/login">Login</NuxtLink>
      <NuxtLink class="border-r px-3" to="/signup">Signup</NuxtLink>
    </div>
    <div v-else>
      <span class="border-r px-3">{{ user.username }}</span>
      <NuxtLink class="border-r px-3" to="/new">Create Post</NuxtLink>
      <button class="pl-3" @click="onLogout">Logout</button>
    </div>
  </div>
</template>
<script setup>
const user = useStrapiUser()
const { logout } = useStrapiAuth()
const router = useRouter()
console.log('user', user.value)
const onLogout = () => {
  logout()
  router.push('/')
}
</script>
<style></style> -->
<template>
  <div></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
