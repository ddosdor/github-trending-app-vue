<template>
  <div ref="uiTooltipContentRef"
       v-show="isTooltipVisible"
       class="bg-gray-800 text-white rounded-md p-2 relative animate-fade-in shadow-lg"
       data-testid="UiTooltip__content"
  >
    <slot name="content" />
    <div class="arrow"
         ref="uiTooltipArrowRef"
    />
  </div>
  <div ref="uiTooltipRef"
       class="flex items-center"
       data-testid="UiTooltip__reference"
       @mouseenter="toggleTooltip"
       @mouseleave="toggleTooltip"
  >
    <slot name="reference" />
  </div>
</template>

<script lang="ts">
import {
  createPopper, StateRects,
} from '@popperjs/core';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'UiTooltip',

  setup() {
    const isTooltipVisible = ref(false);
    const uiTooltipRef = ref<Element>({} as Element);
    const uiTooltipContentRef = ref<HTMLElement>({} as HTMLElement);
    const uiTooltipArrowRef = ref<Element>({} as Element);

    function toggleTooltip() {
      if (isTooltipVisible.value) {
        isTooltipVisible.value = false;
      } else {
        isTooltipVisible.value = true;
        createPopper(uiTooltipRef.value, uiTooltipContentRef.value, {
          placement: 'top',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          }, {
            name: 'arrow',
            options: {
              element: uiTooltipArrowRef.value,
              padding: (padding: StateRects) => padding.reference.width / 2,
            },
          }],
        });
      }
    }

    return {
      isTooltipVisible,
      uiTooltipRef,
      uiTooltipContentRef,
      uiTooltipArrowRef,
      toggleTooltip,
    };
  },
});
</script>

<style lang="sass" scoped>
.arrow
  @apply w-0 h-0 border-gray-800
  border-top-width: 15px
  border-left: 15px solid transparent
  border-right: 15px solid transparent
</style>
