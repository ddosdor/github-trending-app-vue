<template>
  <div>
    <teleport to="body">
      <div v-if="!disabled && isVisible"
           class="UiModalWrapper absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90"
           @click="closeModal"
           data-testid="UiModalWrapper"
      >
        <slot />
      </div>
    </teleport>
    <template v-if="disabled">
      <slot />
    </template>
  </div>
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
    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:isVisible'],

  setup(props, { emit }) {
    function closeModal() {
      if (!props.disabled && props.isVisible) {
        emit('update:isVisible', false);
      }
    }

    return {
      closeModal,
    };
  },
});
</script>
