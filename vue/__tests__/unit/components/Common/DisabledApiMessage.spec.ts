import '@testing-library/jest-dom';
import { render, fireEvent, RenderResult } from '@testing-library/vue';
import DisabledApiMessage from '@/components/Common/DisabledApiMessage.vue';

describe('components/Common/DisabledApiMessage', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(DisabledApiMessage);
  });

  afterEach(() => {
    component.unmount();
  });

  it('Should contain info about API Error and instructions on what to do', () => {
    expect(component.queryByText('API Error')).toBeTruthy();
    expect(component.queryByText('API is currently disabled. Please refresh the page and try again.')).toBeTruthy();
  });

  it('Should contain button with content "Refresh"', () => {
    const button = component.getByRole('button');

    expect(button).toBeTruthy();
    expect(button).toHaveTextContent('Refresh');
  });

  it('Should refresh page on button click', async () => {
    const { location } = window;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window?.location;
    window.location = {
      ...location,
      reload: jest.fn(),
    };
    const button = component.getByRole('button');
    await fireEvent.click(button);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
