<template>
  <svg v-if="fork"
       alt="Fork icon"
       xmlns="http://www.w3.org/2000/svg"
       v-bind="$attrs"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
  >
    <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3
          0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3
          3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>

  <svg v-if="star"
       alt="Star icon"
       xmlns="http://www.w3.org/2000/svg"
       v-bind="$attrs"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
  >
    <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969
          0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538
          1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0
          00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>

  <svg v-if="fire"
       alt="Fire icon"
       xmlns="http://www.w3.org/2000/svg"
       v-bind="$attrs"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
  >
    <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
    <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
    />
  </svg>

  <svg v-if="inboxIn"
       alt="Inbox-in icon"
       xmlns="http://www.w3.org/2000/svg"
       v-bind="$attrs"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
  >
    <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0
          0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414
          2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
    />
  </svg>

  <svg v-if="x"
       xmlns="http://www.w3.org/2000/svg"
       class="h-5 w-5"
       viewBox="0 0 20 20"
       fill="currentColor"
  >
    <path fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1
           0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiHeroIcon',

  props: {
    star: Boolean,
    fork: Boolean,
    fire: Boolean,
    inboxIn: Boolean,
    x: Boolean,
  },
});
</script>
