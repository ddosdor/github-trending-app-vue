<template>
  <span class="LanguageLabel flex items-center">
    <span class="rounded-full w-3 h-3 mr-2 inline-block"
          :style="{ backgroundColor: color || 'gray' }"
    />
    <span>{{ language || '---' }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TrendingRepositoriesLanguageLabel',

  props: {
    language: {
      type: String,
      default: '---',
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
});
</script>
