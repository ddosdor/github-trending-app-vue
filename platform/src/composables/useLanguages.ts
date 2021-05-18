import { ref, computed, ComputedRef } from 'vue';
import { Language } from '@/repositories/types';
import LanguagesRepository from '@/repositories/LanguagesRepository';

type UseLanguagesComposable = {
  isLoading: ComputedRef<boolean>,
  languages: ComputedRef<Language[]>,
}

const isLoading = ref<boolean>(false);
const languages = ref<Language[]>([]);

async function getLanguages(): Promise<void> {
  if (languages.value.length === 0) {
    isLoading.value = true;
    languages.value = await LanguagesRepository.get();
    isLoading.value = false;
  }
}

export function useLanguages(): UseLanguagesComposable {
  getLanguages();
  return {
    isLoading: computed(() => isLoading.value),
    languages: computed(() => languages.value),
  };
}
