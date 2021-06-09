import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import UiTooltip from '@/components/Common/Ui/UiTooltip.vue';

describe('components/Common/Ui/UiTooltip', () => {
  it('Should toggle tooltip visibility on mouseenter and mouseleave', async () => {
    const component = render(UiTooltip);
    const tooltipContent = component.getByTestId('UiTooltip__content');
    const tooltipReference = component.getByTestId('UiTooltip__reference');

    expect(tooltipContent).not.toBeVisible();

    await fireEvent.mouseEnter(tooltipReference);
    expect(tooltipContent).toBeVisible();

    await fireEvent.mouseLeave(tooltipReference);
    expect(tooltipContent).not.toBeVisible();
  });
})
