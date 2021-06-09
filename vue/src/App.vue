<template>
  <AppHeader />
  <div class="relative bottom-28 h-auto">
    <UiMainContent>
      <NavigationAndFiltersWrapper>
        <template #navigation>
          <AppNavigation />
        </template>
        <template #filters>
          <DataFiltering />
        </template>
      </NavigationAndFiltersWrapper>
      <UiLoadingContentWrapper :is-loading="isLoading">
        <DisabledApiMessage v-if="true" />
        <!-- <router-view v-else /> -->
      </UiLoadingContentWrapper>
    </UiMainContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useTrendingRepositories, useTrendingDevelopers, useAppGlobalState } from '@/composables';
import UiLoadingContentWrapper from '@/components/Common/Ui/UiLoadingContentWrapper.vue';
import UiMainContent from '@/components/Common/Ui/UiMainContent.vue';
import DisabledApiMessage from '@/components/Common/DisabledApiMessage.vue';
import NavigationAndFiltersWrapper from '@/components/Common/NavigationAndFiltersWrapper.vue';
import AppHeader from '@/components/Common/AppHeader.vue';
import AppNavigation from '@/components/Common/AppNavigation.vue';
import DataFiltering from '@/components/Common/DataFiltering.vue';

export default defineComponent({
  name: 'App',

  components: {
    UiLoadingContentWrapper,
    UiMainContent,
    DisabledApiMessage,
    NavigationAndFiltersWrapper,
    AppHeader,
    AppNavigation,
    DataFiltering,
  },

  setup() {
    const { apiIsDisabled } = useAppGlobalState();
    const { isLoading: isLoadingTrendingRepositories } = useTrendingRepositories();
    const { isLoading: isLoadingTrendingDevelopers } = useTrendingDevelopers();

    return {
      apiIsDisabled,
      isLoading: computed(() => isLoadingTrendingRepositories.value || isLoadingTrendingDevelopers.value),
    };
  },
});
</script>
