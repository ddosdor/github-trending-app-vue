import { ref, computed, ComputedRef } from 'vue';
import { TrendingDeveloper } from '@/repositories/types';
import TrendingDevelopersRepository from '@/repositories/TrendingDevelopersRepository';
import { useDataFiltering } from './useDataFiltering';

type UseTrendingDevelopersComposable = {
  isLoading: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  trendingDevelopers: ComputedRef<TrendingDeveloper[]>
  getTrendingDevelopers(): Promise<void>,
}

const isLoading = ref<boolean>(false);
const trendingDevelopers = ref<TrendingDeveloper[]>([]);
const { filterParams } = useDataFiltering();

async function getTrendingDevelopers(): Promise<void> {
  isLoading.value = true;
  trendingDevelopers.value = await TrendingDevelopersRepository.get(filterParams.value);
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
