<template>
  <figure class="AvatarImage">
    <img v-bind="$attrs"
         class="rounded-full"
         :class="{
           'w-6 h-6' : small,
           'w-10 h-10' : normalAndDefault,
           'w-12 h-12' : large
         }"
         :src="avatar"
    >
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AvatarImage',

  props: {
    avatar: {
      type: String,
      required: true,
    },
    small: Boolean,
    normal: Boolean,
    large: Boolean,
  },

  setup: (props: Record<string, string | boolean>) => ({
    normalAndDefault: !['small', 'large'].some((key: string) => props[key]),
  }),
});
</script>
