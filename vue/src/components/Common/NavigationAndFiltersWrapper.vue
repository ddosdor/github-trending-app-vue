<template>
  <div class="NavigationAndFiltersWrapper rounded bg-gray-100 shadow-lg mb-4 py-2 px-3 flex flex-col
              lg:flex-row
              "
  >
    <div class="lg:w-1/3">
      <slot name="navigation" />
    </div>
    <div class="flex mt-5
                lg:mt-0 lg:ml-auto
               "
    >
      <slot name="filters" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationAndFiltersWrapper',
});
</script>
