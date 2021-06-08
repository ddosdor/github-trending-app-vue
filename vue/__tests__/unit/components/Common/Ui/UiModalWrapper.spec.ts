import '@testing-library/jest-dom';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import UiModalWrapper from '@/components/Common/Ui/UiModalWrapper.vue';

describe('components/Common/Ui/UiModalWrapper', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(UiModalWrapper, {
      slots: {
        default: '<p>Modal content</p>',
      },
    });
  });

  afterEach(() => {
    component.unmount();
  });

  it(`Should be not as modal if props "disabled" is passed with value set to true,
    even if props "isVisible" is set to true
  `, async () => {
    await component.rerender({
      isVisible: true,
      disabled: true,
    });
    expect(component.queryByTestId('UiModalWrapper')).not.toBeInTheDocument();
    expect(component.queryByText('Modal content')).toBeInTheDocument();
  });

  it('Should be a modal window with teleport to body if props disabled is passed to false.', async () => {
    // default
    expect(component.queryByTestId('UiModalWrapper')).not.toBeInTheDocument();
    expect(component.queryByText('Modal content')).not.toBeInTheDocument();

    await component.rerender({
      isVisible: true,
    });

    expect(component.queryByTestId('UiModalWrapper')).toBeInTheDocument();
    expect(component.queryByText('Modal content')).toBeInTheDocument();
    expect(component.queryByTestId('UiModalWrapper')?.parentNode?.nodeName).toBe('BODY');

    await component.rerender({
      isVisible: false,
    });

    expect(component.queryByTestId('UiModalWrapper')).not.toBeInTheDocument();
    expect(component.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('Should emit "update:isVisible" if wrapper is clicked', async () => {
    await component.rerender({
      isVisible: true,
    });

    expect(component.queryByTestId('UiModalWrapper')).toBeInTheDocument();
    expect(component.queryByText('Modal content')).toBeInTheDocument();

    await fireEvent.click(component.getByTestId('UiModalWrapper'));

    expect(component.emitted()['update:isVisible'][0]).toStrictEqual([false]);
  });
});
