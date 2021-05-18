<template>
  <teleport to="body">
    <div v-if="disabled && modelValue"
         class="UiModalWrapper absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90"
    >
      <slot />
    </div>
  </teleport>
  <template v-if="!disabled">
    <slot />
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiModalWrapper',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],
});
</script>
