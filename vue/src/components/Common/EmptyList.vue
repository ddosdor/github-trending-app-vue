<template>
  <div class="EmptyList flex flex-col justify-center items-center py-8
              lg:py-32
             "
  >
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-28 w-28 text-gray-700 opacity-10
                lg:h-36 lg:w-36
               "
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
    >
      <path stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="block font-bold text-xl
                 lg:text-3xl
                "
    >
      No results
    </span>
    <span class="block text-sm
                 lg:text-lg
                "
    >
      Change filters and try again
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EmptyList',
});
</script>
