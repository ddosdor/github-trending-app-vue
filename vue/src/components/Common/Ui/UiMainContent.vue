<template>
  <main class="UiMainContent
    p-4
    md:px-12
    lg:px-20 lg:w-4/5 lg:mx-auto
    2xl:px-32
    "
  >
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiMainContent',
});
</script>
