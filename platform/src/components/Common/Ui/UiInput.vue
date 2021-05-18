<template>
  <input v-bind="$attrs"
         ref="$inputRef"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         class="border border-gray-300 rounded w-full px-4 py-2 text-xs focus:ring ring-blue-500 ring-opacity-30 outline-none"
  >
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';

export default defineComponent({
  name: 'UiInput',

  props: {
    modelValue: {
      type: [Number, String],
      default: null,
    },
    autofocus: Boolean,
  },

  emits: ['update:modelValue'],

  setup(props) {
    const $inputRef = ref();

    onMounted(() => {
      nextTick(() => {
        if (props.autofocus) $inputRef.value.focus();
      });
    });

    return {
      $inputRef,
    };
  },
});
</script>
