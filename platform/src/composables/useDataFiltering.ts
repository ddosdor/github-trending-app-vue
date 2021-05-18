import { ref, Ref } from 'vue';
import { SinceType, TrendingRepoFilterParams, TrendingDevelopersFilterParams } from '@/repositories/types';

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
  setDefault(): void
}

function setDefault(): void {
  filterParams.value.language = DEFAULT_FILTERS.language;
  filterParams.value.since = DEFAULT_FILTERS.since;
  filterParams.value.spoken_language_code = DEFAULT_FILTERS.spoken_language_code;
}

export function useDataFiltering(): UseDataFilteringComposable {
  return {
    filterParams,
    setDefault,
  };
}
