<template>
  <div class="TrendingDevelopersListItem p-4
            bg-white rounded shadow-md flex flex-col items-center space-y-3
              md:flex-row md:items-start md:space-y-0
             "
  >
    <div class="text-gray-500 text-sm
                md:w-8
                lg:w-12
               "
    >
      {{ index }}
    </div>
    <div class="flex flex-col items-center
                md:flex-row md:flex-none md:w-1/3
               "
    >
      <UiAvatar class="flex-shrink-0
                       lg:w-14 lg:h-14
                      "
                large
                :avatar="developer.avatar"
      />
      <div class="text-center
                  md:text-left md:ml-2
                  lg:ml-4
                "
      >
        <h3 class="font-bold text-lg text-blue-700
                   lg:text-xl
                  "
        >
          {{ developer.name }}
        </h3>
        <span class="relative text-sm inline-block bottom-2">
          {{ developer.username }}
        </span>
      </div>
    </div>
    <div class="flex flex-col items-center
                md:w-2/3 md:items-start
               "
    >
      <h4 class="text-xs font-normal uppercase text-gray-600 flex">
        <UiHeroIcon fire
                    class="w-4 h-4 text-red-600
                           md:mr-1
                          "
        />
        Popular repo
      </h4>
      <a :href="developer.repo?.url"
         target="__blank"
         class="text-blue-700 font-bold flex items-center"
      >
        <UiHeroIcon inbox-in
                    class="w-4 h-4 text-gray-500 hidden
                           md:block md:top-1 md:mr-1 relative
                          "
        /> {{ developer.repo?.name || '---' }}
      </a>
      <div class="text-sm">
        {{ developer.repo?.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TrendingDeveloper } from '@/repositories/types';
import UiHeroIcon from '@/components/Common/Ui/UiHeroIcon.vue';
import UiAvatar from '@/components/Common/Ui/UiAvatar.vue';

export default defineComponent({
  name: 'TrendingDevelopersListItem',

  components: {
    UiHeroIcon,
    UiAvatar,
  },

  props: {
    index: {
      type: Number,
      default: 0,
    },
    developer: {
      type: Object as () => TrendingDeveloper,
      default: () => ({} as TrendingDeveloper),
    },
  },
});
</script>
