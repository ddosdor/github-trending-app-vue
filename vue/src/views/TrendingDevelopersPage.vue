<template>
  <EmptyList v-if="isEmpty && !isLoading" />
  <TrendingDevelopersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTrendingDevelopers, useDataFiltering } from '@/composables';
import EmptyList from '@/components/Common/EmptyList.vue';
import TrendingDevelopersList from '@/components/TrendingDevelopers/TrendingDevelopersList.vue';

export default defineComponent({
  name: 'TrendingDevelopersPageView',

  components: {
    EmptyList,
    TrendingDevelopersList,
  },

  setup() {
    const { isLoading, isEmpty, getTrendingDevelopers } = useTrendingDevelopers();
    const { filterParams } = useDataFiltering();
    getTrendingDevelopers(filterParams.value);
    return {
      isEmpty, isLoading,
    };
  },
});
</script>
