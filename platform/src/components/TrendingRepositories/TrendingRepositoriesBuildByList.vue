<template>
  <div class="TrendingRepositoriesBuildByList flex justify-center space-x-1">
    <a class="cursor-pointer"
       v-for="(developer, index) in builtBy"
       :key="index"
       :href="developer.href"
    >
      <UiTooltip>
        <template #content>
          <div class="flex flex-col items-center p-2">
            <div class="rounded-full ring-4 ring-white ring-opacity-10">
              <UiAvatar large
                        :avatar="developer.avatar"
              />
            </div>
            <span class="font-semibold block mt-1">
              {{ developer.username }}
            </span>
          </div>
        </template>
        <template #reference>
          <UiAvatar small
                    :avatar="developer.avatar"
          />
        </template>
      </UiTooltip>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BuiltBy } from '@/repositories/types';
import UiAvatar from '@/components/Common/Ui/UiAvatar.vue';
import UiTooltip from '@/components/Common/Ui/UiTooltip.vue';

export default defineComponent({
  name: 'TrendingRepositoriesBuildByList',

  components: {
    UiAvatar,
    UiTooltip,
  },

  props: {
    builtBy: {
      type: Array as () => BuiltBy[],
      default: () => ([] as BuiltBy[]),
    },
  },
});
</script>
