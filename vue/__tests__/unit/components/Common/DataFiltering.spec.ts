import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import { routes } from '@/router';
import DataFiltering from '@/components/Common/DataFiltering.vue';

describe('components/Common/DataFiltering', () => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

  it('Should have properly filters according to route - TrendingRepositoryPage', async () => {
    router.push('/');
    await router.isReady();
    let component = render(DataFiltering, {
      global: {
        stubs: {
          UiSelect: { template: '<div />' },
          UiTooltip: { template: '<div />' },
          UiHeroIcon: { template: '<div />' },
        },
        plugins: [router],
      },
    });
    expect(component.queryByTestId('DataFiltering__select-spoken-language')).toBeInTheDocument();
    expect(component.queryByTestId('DataFiltering__select-language')).toBeInTheDocument();
    expect(component.queryByTestId('DataFiltering__select-data-range')).toBeInTheDocument();
  });

  it('Should have properly filters according to route - TrendingDevepersPage', async () => {
    router.push('/developers');
    await router.isReady();
    let component = render(DataFiltering, {
      global: {
        stubs: {
          UiSelect: { template: '<div />' },
          UiTooltip: { template: '<div />' },
          UiHeroIcon: { template: '<div />' },
        },
        plugins: [router],
      },
    });
    expect(component.queryByTestId('DataFiltering__select-spoken-language')).not.toBeInTheDocument();
    expect(component.queryByTestId('DataFiltering__select-language')).toBeInTheDocument();
    expect(component.queryByTestId('DataFiltering__select-data-range')).toBeInTheDocument();
  });
});
