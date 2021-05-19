<template>
  <EmptyList v-if="isEmpty && !isLoading" />
  <TrendingDevelopersList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTrendingDevelopers } from '@/composables/useTrendingDevelopers';
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
    getTrendingDevelopers();
    return {
      isEmpty, isLoading,
    };
  },
});
</script>
