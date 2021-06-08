import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/vue';
import UiLoadingContentWrapper from '@/components/Common/Ui/UiLoadingContentWrapper.vue';

describe('components/Common/Ui/UiLoadingContentWrapper', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(UiLoadingContentWrapper);
  });

  it('Should not have loading spinner', async () => {
    const uiLoadingSpinner = component.queryByTestId('ui-loading-spinner');
    expect(component.baseElement).not.toContainElement(uiLoadingSpinner);
  });

  it('Should have loading spinner if props isLoading is set to true', async () => {
    await component?.rerender({ isLoading: true });
    const uiLoadingSpinner = component.queryByTestId('ui-loading-spinner');
    expect(component.baseElement).toContainElement(uiLoadingSpinner);
  });
});
