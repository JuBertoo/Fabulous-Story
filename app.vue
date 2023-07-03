<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <NuxtPage />
        <!-- <Account v-if="user" />
        <Auth v-else /> -->
      </NuxtLayout>
    </Body>
  </Html>
</template>
<script lang="ts" setup>
import { ITheme } from './utils/theme'
const theme = useState<ITheme>('theme.current')
const user = useSupabaseUser()
</script>
