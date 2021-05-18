import { ref, computed, ComputedRef } from 'vue';
import { TrendingRepo } from '@/repositories/types';
import TrendingRepoRepository from '@/repositories/TrendingRepoRepository';
import { useDataFiltering } from './useDataFiltering';

type UseTrendingReposComposable = {
  isLoading: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  trendingRepositories: ComputedRef<TrendingRepo[]>
  getTrendingRepos(): Promise<void>
}

const isLoading = ref<boolean>(false);
const trendingRepositories = ref<TrendingRepo[]>([]);
const { filterParams } = useDataFiltering();

async function getTrendingRepos(): Promise<void> {
  isLoading.value = true;
  trendingRepositories.value = await TrendingRepoRepository.get(filterParams.value);
  isLoading.value = false;
}

export function useTrendingRepositories(): UseTrendingReposComposable {
  return {
    isLoading: computed(() => isLoading.value),
    isEmpty: computed(() => trendingRepositories.value.length === 0),
    trendingRepositories: computed(() => trendingRepositories.value),
    getTrendingRepos,
  };
}
