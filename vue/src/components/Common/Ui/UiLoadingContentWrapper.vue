<template>
  <div class="UiLoadingContentWrapper relative">
    <div v-if="isLoading"
         class="absolute top-14 w-full animate-fade-in-down"
    >
      <UiLoadingSpinner data-testid="ui-loading-spinner" />
    </div>
    <div :class="{'opacity-5' : isLoading, 'animate-fade-in-up': !isLoading }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiLoadingSpinner from './UiLoadingSpinner.vue';

export default defineComponent({
  name: 'UiLoadingContentWrapper',

  components: {
    UiLoadingSpinner,
  },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
