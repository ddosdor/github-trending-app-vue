<template>
  <div class="TrendingRepositoriesList flex flex-col space-y-4">
    <TrendingRepositoriesListItem v-for="(repo, index) in trendingRepositories"
                                  :key="index"
                                  :repo="repo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTrendingRepositories } from '@/composables';
import TrendingRepositoriesListItem from './TrendingRepositoriesListItem.vue';

export default defineComponent({
  name: 'TrendingRepositoriesList',

  components: {
    TrendingRepositoriesListItem,
  },

  setup() {
    const { trendingRepositories } = useTrendingRepositories();

    return {
      trendingRepositories,
    };
  },
});
</script>
