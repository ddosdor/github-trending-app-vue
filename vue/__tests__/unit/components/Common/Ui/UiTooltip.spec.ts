import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import UiTooltip from '@/components/Common/Ui/UiTooltip.vue';

describe('components/Common/Ui/UiTooltip', () => {
  it('Should toggle tooltip visibility on mouseenter and mouseleave', async () => {
    const { getByTestId } = render(UiTooltip);

    expect(getByTestId('ui-tooltip-content')).toHaveClass('hidden');

    await fireEvent.mouseEnter(getByTestId('ui-tooltip-ref'));
    expect(getByTestId('ui-tooltip-content')).not.toHaveClass('hidden');
    await fireEvent.mouseLeave(getByTestId('ui-tooltip-ref'));
    expect(getByTestId('ui-tooltip-content')).toHaveClass('hidden');
  });
})
