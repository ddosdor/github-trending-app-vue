<template>
  <div class="DataFiltering w-full flex flex-col text-sm space-y-3
              lg:flex-row lg:space-y-0 lg:items-center lg:space-x-6
             "
  >
    <UiSelect v-if="shouldShowSpokenLanguageFilter"
              :options-list="spokenLanguages"
              v-model="filterParams.spoken_language_code"
              title="Spoken Language"
              placeholder="Select spoken language"
              filtering-placeholder="Filter spooken languages"
              as-label="name"
              as-value="urlParam"
              filterable
              clearable
              data-testid="DataFiltering__select-spoken-language"
    />
    <UiSelect :options-list="languages"
              v-model="filterParams.language"
              title="Language"
              placeholder="Select language"
              filtering-placeholder="Filter languages"
              as-label="name"
              as-value="urlParam"
              filterable
              clearable
              data-testid="DataFiltering__select-language"
    />
    <UiSelect :options-list="dateRange"
              v-model="filterParams.since"
              title="Date range"
              placeholder="Adjust time span"
              as-label="name"
              as-value="urlParam"
              data-testid="DataFiltering__select-data-range"
    />
    <UiTooltip>
      <template #content>
        Clear filter data
      </template>
      <template #reference>
        <button class="border border-gray-200 focus:outline-none hover:bg-gray-200 transition-colors duration-300 focus:border-gray-300 focus:bg-gray-300"
                @click="setDefault"
        >
          <UiHeroIcon x />
        </button>
      </template>
    </UiTooltip>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { computed, defineComponent } from 'vue';
import {
  useSpokenLanguages,
  useLanguages,
  useDateRange,
  useDataFiltering,
} from '@/composables';
import UiHeroIcon from '@/components/Common/Ui/UiHeroIcon.vue';
import UiTooltip from '@/components/Common/Ui/UiTooltip.vue';
import UiSelect from '@/components/Common/Ui/UiSelect.vue';

export default defineComponent({
  name: 'DataFiltering',

  components: {
    UiHeroIcon,
    UiTooltip,
    UiSelect,
  },

  setup() {
    const route = useRoute();
    const { isLoading: isLoadingSpokenLanguages, spokenLanguages } = useSpokenLanguages();
    const { isLoading: isLoadingLanguages, languages } = useLanguages();
    const { dateRange } = useDateRange();
    const { filterParams, setDefault, refreshListWhenChangingFiltersDependingOnRouting } = useDataFiltering();

    refreshListWhenChangingFiltersDependingOnRouting();

    return {
      isLoadingSpokenLanguages,
      isLoadingLanguages,
      spokenLanguages,
      languages,
      dateRange,
      filterParams,
      shouldShowSpokenLanguageFilter: computed(() => route.name === 'TrendingRepositoryPage'),
      setDefault,
    };
  },
});
</script>
