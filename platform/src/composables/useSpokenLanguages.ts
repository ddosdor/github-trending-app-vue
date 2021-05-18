import { ref, computed, ComputedRef } from 'vue';
import { SpokenLanguage } from '@/repositories/types';
import SpokenLanguagesRepository from '@/repositories/SpokenLanguagesRepository';

type UseSpokenLanguagesComposable = {
  isLoading: ComputedRef<boolean>,
  spokenLanguages: ComputedRef<SpokenLanguage[]>,
}

const isLoading = ref<boolean>(false);
const spokenLanguages = ref<SpokenLanguage[]>([]);

async function getSpokenLanguages(): Promise<void> {
  if (spokenLanguages.value.length === 0) {
    isLoading.value = true;
    spokenLanguages.value = await SpokenLanguagesRepository.get();
    isLoading.value = false;
  }
}

export function useSpokenLanguages(): UseSpokenLanguagesComposable {
  getSpokenLanguages();
  return {
    isLoading: computed(() => isLoading.value),
    spokenLanguages: computed(() => spokenLanguages.value),
  };
}
