import { mount } from '@vue/test-utils';
import UiInput from '@/components/Common/Ui/UiInput.vue';

describe('components/Common/Ui/UiInput', () => {
  it('Should be focused after mounted if has autofocus props', async () => {
    document.body.innerHTML = `
      <div id="app" />
     `;

    const withFocus = mount(UiInput, {
      attachTo: document.getElementById('app'),
      props: {
        autofocus: true,
      },
    });
    expect(withFocus.element).toBe(document.activeElement);
  });
});