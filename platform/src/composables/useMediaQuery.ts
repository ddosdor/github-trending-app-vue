import { reactive, toRefs, Ref, watch } from 'vue';
import { useWindowSize } from './useWindowSize';

export type MediaQuery = {
  sm: Ref<boolean>,
  md: Ref<boolean>,
  lg: Ref<boolean>
  xl: Ref<boolean>
  xxl: Ref<boolean>
};

// breakpoints according to Tailwind default config
export const SM_BREAKPOINT = 640;
export const MD_BREAKPOINT = 768;
export const LG_BREAKPOINT = 1024;
export const XL_BREAKPOINT = 1280;
export const XXL_BREAKPOINT = 1536;

export function useMediaQuery(): Readonly<MediaQuery> {
  const { width } = useWindowSize();

  const state = reactive({
    sm: width.value <= SM_BREAKPOINT,
    md: width.value > SM_BREAKPOINT && width.value <= MD_BREAKPOINT,
    lg: width.value > MD_BREAKPOINT && width.value <= LG_BREAKPOINT,
    xl: width.value > LG_BREAKPOINT && width.value <= XL_BREAKPOINT,
    xxl: width.value >= XXL_BREAKPOINT,
  });

  watch(
    width,
    (currentWidth) => {
      state.sm = currentWidth <= SM_BREAKPOINT;
      state.md = currentWidth > SM_BREAKPOINT && currentWidth <= MD_BREAKPOINT;
      state.lg = currentWidth > MD_BREAKPOINT && currentWidth <= LG_BREAKPOINT;
      state.xl = currentWidth > LG_BREAKPOINT && currentWidth <= XL_BREAKPOINT;
      state.xxl = currentWidth >= XXL_BREAKPOINT;
    },
  );

  return {
    ...toRefs(state),
  };
}
