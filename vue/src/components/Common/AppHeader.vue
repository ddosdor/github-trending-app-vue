<template>
  <header class="AppHeader text-center py-14 px-4 h-72 bg-gray-800 text-white">
    <h1 class="text-3xl font-bold">
      Github Trending
    </h1>
    <p class="mt-1 text-blue-100">
      See what the GitHub community is most excited about today.
    </p>
    <small class="text-gray-500">Made with Vue 3 and TailwindCSS</small>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
});
</script>
