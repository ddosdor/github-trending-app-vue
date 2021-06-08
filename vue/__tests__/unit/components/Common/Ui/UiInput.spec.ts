import { render } from '@testing-library/vue';
import UiInput from '@/components/Common/Ui/UiInput.vue';

describe('components/Common/Ui/UiInput', () => {
  it('Should not be focused after mounted by default', async () => {
    let component = render(UiInput);
    const input = await component.findByTestId('UiInput');
    expect(input.matches(':focus')).toEqual(false);
  });

  it('Should be focused after mounted if has autofocus props', async () => {
    let component = render(UiInput, { props: { autofocus: true } });
    const input = await component.findByTestId('UiInput');
    expect(input.matches(':focus')).toEqual(true);
  });
});
