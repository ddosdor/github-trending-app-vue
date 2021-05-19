<template>
  <div class="TrendingDevelopersList flex flex-col space-y-4">
    <TrendingDevelopersListItem v-for="(developer, index) in trendingDevelopers"
                                :key="index"
                                :developer="developer"
                                :index="index + 1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTrendingDevelopers } from '@/composables';
import TrendingDevelopersListItem from './TrendingDevelopersListItem.vue';

export default defineComponent({
  name: 'TrendingDevelopersList',

  components: {
    TrendingDevelopersListItem,
  },

  setup() {
    const { trendingDevelopers } = useTrendingDevelopers();

    return {
      trendingDevelopers,
    };
  },
});
</script>
