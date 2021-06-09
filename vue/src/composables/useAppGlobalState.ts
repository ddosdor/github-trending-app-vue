import { ref, computed, ComputedRef } from 'vue';

type UseAppGLobalStateComposables = {
  apiIsDisabled: ComputedRef<boolean>,
  setApiDisabled(): void,
  setApiEnabled(): void,
};

const apiIsDisabled = ref<boolean>(false);

function setApiDisabled(): void {
  apiIsDisabled.value = true;
}

function setApiEnabled(): void {
  apiIsDisabled.value = false;
}

export function useAppGlobalState(): UseAppGLobalStateComposables {
  return {
    apiIsDisabled: computed(() => apiIsDisabled.value),
    setApiDisabled,
    setApiEnabled,
  };
}
