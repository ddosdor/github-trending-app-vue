import '@testing-library/jest-dom';
import { defineComponent } from 'vue';
import { render, fireEvent } from '@testing-library/vue';
import UiButton from '@/components/Common/Ui/UiButton.vue';

describe('components/Common/Ui/UiButton', () => {
  it('Should render button with content', () => {
    const component = render(defineComponent({
      components: {
        UiButton,
      },
      template: `
        <UiButton>
          Click me!
        </UiButton>
      `,
    }));

    expect(component.getByRole('button')).toHaveTextContent('Click me!');
  });

  it('Should emit "click" event if its clicked', async () => {
    const component = render(UiButton);
    const button = component.getByRole('button');
    await fireEvent.click(button);
    expect(component.emitted().click).toBeTruthy();
  });
})