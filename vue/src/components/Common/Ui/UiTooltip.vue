<template>
  <div ref="$tooltipContentRef"
       :class="{'hidden': !isTooltipVisible}"
       class="bg-gray-800 text-white rounded-md p-2 relative animate-fade-in shadow-lg"
       data-testid="ui-tooltip-content"
  >
    <slot name="content" />
    <div class="arrow"
         ref="$tooltipArrowRef"
    />
  </div>
  <div ref="$tooltipRef"
       class="flex items-center"
       data-testid="ui-tooltip-ref"
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
    const $tooltipRef = ref<Element>({} as Element);
    const $tooltipContentRef = ref<HTMLElement>({} as HTMLElement);
    const $tooltipArrowRef = ref<Element>({} as Element);

    function toggleTooltip() {
      if (isTooltipVisible.value) {
        isTooltipVisible.value = false;
      } else {
        isTooltipVisible.value = true;
        createPopper($tooltipRef.value, $tooltipContentRef.value, {
          placement: 'top',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          }, {
            name: 'arrow',
            options: {
              element: $tooltipArrowRef.value,
              padding: (padding: StateRects) => padding.reference.width / 2,
            },
          }],
        });
      }
    }

    return {
      isTooltipVisible,
      $tooltipRef,
      $tooltipContentRef,
      $tooltipArrowRef,
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
