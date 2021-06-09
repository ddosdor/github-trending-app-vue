import { ref, watch, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTrendingRepositories } from '@/composables/useTrendingRepositories';
import { useTrendingDevelopers } from '@/composables/useTrendingDevelopers';
import { SinceType, TrendingRepoFilterParams, TrendingDevelopersFilterParams } from '@/repositories/types';

const { getTrendingRepos } = useTrendingRepositories();
const { getTrendingDevelopers } = useTrendingDevelopers();

const DEFAULT_FILTERS = {
  language: null,
  since: 'daily' as SinceType,
  spoken_language_code: null,
};

const filterParams = ref<TrendingRepoFilterParams & TrendingDevelopersFilterParams>({
  language: DEFAULT_FILTERS.language,
  since: DEFAULT_FILTERS.since,
  spoken_language_code: DEFAULT_FILTERS.spoken_language_code,
});

type UseDataFilteringComposable = {
  filterParams: Ref<TrendingRepoFilterParams & TrendingDevelopersFilterParams>
  setDefault(): void,
  refreshListWhenChangingFiltersDependingOnRouting(): void,
}

function setDefault(): void {
  filterParams.value.language = DEFAULT_FILTERS.language;
  filterParams.value.since = DEFAULT_FILTERS.since;
  filterParams.value.spoken_language_code = DEFAULT_FILTERS.spoken_language_code;
}

function refreshListWhenChangingFiltersDependingOnRouting(): void {
  const route = useRoute();

  watch(
    () => filterParams.value,
    (newValue) => {
      switch (true) {
        case route?.name === 'TrendingRepositoryPage':
          getTrendingRepos(newValue);
          break;
        case route?.name === 'TrendingDevelopersPage':
          getTrendingDevelopers(newValue);
          break;
        default: break;
      }
    },
    { deep: true },
  );
}

export function useDataFiltering(): UseDataFilteringComposable {
  return {
    filterParams,
    setDefault,
    refreshListWhenChangingFiltersDependingOnRouting,
  };
}
