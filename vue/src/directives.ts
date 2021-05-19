/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Directive } from 'vue';

export const clickOutside: Directive = {
  beforeMount: (el, binding) => {
    const _el = el;
    _el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el): void => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};
