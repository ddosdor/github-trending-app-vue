<template>
  <EmptyList v-if="isEmpty && !isLoading" />
  <TrendingRepositoriesList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTrendingRepositories, useDataFiltering } from '@/composables';
import EmptyList from '@/components/Common/EmptyList.vue';
import TrendingRepositoriesList from '@/components/TrendingRepositories/TrendingRepositoriesList.vue';

export default defineComponent({
  name: 'TrendingRepositoryPageView',

  components: {
    EmptyList,
    TrendingRepositoriesList,
  },

  setup() {
    const { isLoading, isEmpty, getTrendingRepos } = useTrendingRepositories();
    const { filterParams } = useDataFiltering();
    getTrendingRepos(filterParams.value);
    return {
      isEmpty, isLoading,
    };
  },
});
</script>
