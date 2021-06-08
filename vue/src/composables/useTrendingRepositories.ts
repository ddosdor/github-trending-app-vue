import { ref, computed, ComputedRef } from 'vue';
import { TrendingRepo, TrendingRepoFilterParams } from '@/repositories/types';
import TrendingRepoRepository from '@/repositories/TrendingRepoRepository';

type UseTrendingReposComposable = {
  isLoading: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  trendingRepositories: ComputedRef<TrendingRepo[]>
  getTrendingRepos(params: TrendingRepoFilterParams): Promise<void>
}

const isLoading = ref<boolean>(false);
const trendingRepositories = ref<TrendingRepo[]>([]);

async function getTrendingRepos(params: TrendingRepoFilterParams): Promise<void> {
  isLoading.value = true;
  trendingRepositories.value = await TrendingRepoRepository.get(params);
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
