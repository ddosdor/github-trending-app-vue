import { ref, computed, ComputedRef } from 'vue';
import { TrendingDeveloper, TrendingDevelopersFilterParams } from '@/repositories/types';
import TrendingDevelopersRepository from '@/repositories/TrendingDevelopersRepository';

type UseTrendingDevelopersComposable = {
  isLoading: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  trendingDevelopers: ComputedRef<TrendingDeveloper[]>
  getTrendingDevelopers(params: TrendingDevelopersFilterParams): Promise<void>,
}

const isLoading = ref<boolean>(false);
const trendingDevelopers = ref<TrendingDeveloper[]>([]);

async function getTrendingDevelopers(params: TrendingDevelopersFilterParams = {}): Promise<void> {
  isLoading.value = true;
  trendingDevelopers.value = await TrendingDevelopersRepository.get(params);
  isLoading.value = false;
}

export function useTrendingDevelopers(): UseTrendingDevelopersComposable {
  return {
    isLoading: computed(() => isLoading.value),
    isEmpty: computed(() => trendingDevelopers.value.length === 0),
    trendingDevelopers: computed(() => trendingDevelopers.value),
    getTrendingDevelopers,
  };
}
