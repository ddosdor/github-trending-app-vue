import { reactive, Ref, toRefs, onUnmounted } from 'vue';

type UseWindowSizeComposable = {
  width: Ref<number>,
  height: Ref<number>,
}

export function useWindowSize(): UseWindowSizeComposable {
  const state = reactive({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleWindowResize(): void {
    state.height = window.innerHeight;
    state.width = window.innerWidth;
  }

  window.addEventListener('resize', handleWindowResize);

  onUnmounted(() => {
    window.removeEventListener('resize', handleWindowResize);
  });

  return {
    ...toRefs(state),
  };
}
