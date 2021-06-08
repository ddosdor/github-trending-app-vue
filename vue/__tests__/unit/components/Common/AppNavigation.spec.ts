import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import AppNavigation from '@/components/Common/AppNavigation.vue';

describe('components/Common/AppNavigation', () => {
  it('Should have routing links', () => {
    const component = render(AppNavigation, {
      global: {
        stubs: {
          'router-link': { template: '<a />' },
        },
      },
    });

    expect(component.getByTestId('AppNavigation__link-to-repository')).toHaveAttribute('to', '/');
    expect(component.getByTestId('AppNavigation__link-to-developers')).toHaveAttribute('to', '/developers');
  });
});
