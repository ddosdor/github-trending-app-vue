<template>
  <button class="UiButton rounded cursor-pointer focus:outline-none transition duration-200 flex flex-row justify-center min-w-28
              text-sm px-3 py-2
              bg-gray-600 text-white border border-gray-600 hover:bg-gray-500 focus:bg-gray-700
              md:text-base
             "
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiButton',
});
</script>
