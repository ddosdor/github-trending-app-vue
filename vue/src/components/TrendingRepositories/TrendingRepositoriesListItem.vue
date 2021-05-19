<template>
  <div class="TrendingRepositoriesListItem
              p-4 bg-white rounded shadow-md flex flex-col items-center space-y-3
              md:items-start
              lg:space-y-4
             "
  >
    <div class="flex flex-col items-center
                md:flex-row
               "
    >
      <UiAvatar :avatar="repo.avatar" />
      <a class="text-blue-700 flex flex-col items-center
                  md:flex-row md:ml-3 md:justify-center
                  lg:bottom-1 lg:relative
                "
         :href="repo.url"
         target="__blank"
      >
        <span class="font-semibold text-sm
                      md:text-lg
                      lg:text-xl
                    "
        >
          {{ repo.author }}
        </span>
        <span class="hidden md:inline-block md:mx-2"> / </span>
        <span class="font-bold
                      md:text-lg
                      lg:text-xl
                    "
        >
          {{ repo.name }}
        </span>
      </a>
    </div>
    <div class="text-sm
                lg:text-base
               "
    >
      {{ repo.description }}
    </div>
    <div class="flex flex-col space-y-3
                md:flex-row md:items-center md:w-full md:space-y-0
               "
    >
      <div class="flex space-x-4 text-sm
                  md:items-center
                 "
      >
        <LanguageLabel :language="repo.language"
                       :color="repo.languageColor"
        />
        <div class="flex items-center">
          <UiHeroIcon star
                      class="w-4 h-4"
          />
          {{ repo.stars }}
        </div>
        <div class="flex items-center">
          <UiHeroIcon fork
                      class="w-4 h-4"
          />
          {{ repo.forks }}
        </div>
      </div>
      <div class="flex flex-col space-y-2 text-sm text-center
                  md:flex md:flex-row md:items-center md:space-y-0 md:ml-4
                "
      >
        <span class="md:mr-1">Built by:</span>
        <TrendingRepositoriesBuildByList :built-by="repo.builtBy" />
      </div>
      <div class="flex items-center justify-center text-sm text-center
                  md:ml-auto
                 "
      >
        <UiHeroIcon star
                    class="w-4 h-4"
        />
        {{ repo.currentPeriodStars }} stars today
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TrendingRepo } from '@/repositories/types';
import UiHeroIcon from '@/components/Common/Ui/UiHeroIcon.vue';
import UiAvatar from '@/components/Common/Ui/UiAvatar.vue';
import LanguageLabel from './TrendingRepositoriesLanguageLabel.vue';
import TrendingRepositoriesBuildByList from './TrendingRepositoriesBuildByList.vue';

export default defineComponent({
  name: 'TrendingRepositoriesListItem',

  components: {
    UiHeroIcon,
    UiAvatar,
    LanguageLabel,
    TrendingRepositoriesBuildByList,
  },

  props: {
    repo: {
      type: Object as () => TrendingRepo,
      default: () => ({} as TrendingRepo),
    },
  },
});
</script>
