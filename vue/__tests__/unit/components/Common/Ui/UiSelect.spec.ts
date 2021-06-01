/* eslint-disable no-unused-expressions */
import '@testing-library/jest-dom';
import { render, fireEvent, RenderResult } from '@testing-library/vue';
import { clickOutside } from '@/directives';
import UiSelect from '@/components/Common/Ui/UiSelect.vue';

interface OptionsListElement {
  [key: string]: string | number | boolean
}

describe('components/Common/Ui/UiSelect', () => {
  let component: RenderResult;
  let mockedProps = {
    optionsList: [
      { name: 'John', age: 24, slug: '_john' },
      { name: 'Steve', age: 14, slug: '_steve' },
      { name: 'Liam', age: 32, slug: '_liam' },
      { name: 'Oliver', age: 56, slug: '_oliver' },
      { name: 'Elijah', age: 47, slug: '_elijah' },
      { name: 'Alexander', age: 18, slug: '_alexander' },
      { name: 'Isabella', age: 80, slug: '_isabella' },
      { name: 'Harper', age: 22, slug: '_harper' },
      { name: 'Lucas', age: 23, slug: '_lucas' },
      { name: 'Benjamin', age: 36, slug: '_benjamin' },
      { name: 'Ben', age: 36, slug: '_ben' },
    ] as OptionsListElement[],
    asLabel: 'name',
    asValue: 'slug',
  };

  beforeEach(() => {
    component = render(UiSelect, {
      props: {
        ...mockedProps,
      },
      global: {
        directives: {
          clickOutside,
        },
      },
    });
  });

  afterEach(() => {
    component.unmount();
  });

  /** TESTS FOR COMPONENT BEHAVIOR */

  it('Should have correct title', async () => {
    component.getByText(/Select/i);
    await component?.rerender({
      ...mockedProps,
      title: 'Select people from list',
    });
    component.getByText(/Select people from list/i);
  });

  it('Should have correct placeholder', async () => {
    const select = component.getByTestId('UiSelect__select');
    await component?.rerender({
      ...mockedProps,
      placeholder: 'Choose one of the people',
    });
    await fireEvent.click(select);
    component.getByText(/Choose one of the people/i);
  });

  it('Should have "Any" text if there is no selected item', () => {
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Any');
  });

  it('Should show container with listed options on click', async () => {
    expect(component.getByTestId('UiSelect__options-list-container')).not.toBeVisible();
    await fireEvent.click(component.getByTestId('UiSelect__select'));
    expect(component.getByTestId('UiSelect__options-list-container')).toBeVisible();
  });

  it('Should render list with the correct number of elements', async () => {
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    const ulList = component.getByTestId('UiSelect__options-list');
    expect(ulList.childElementCount).toBe(mockedProps.optionsList.length);
  });

  it('Should have input to filter list if props "filterable" is passed', async () => {
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    expect(component.baseElement).not.toContainElement(component.queryByTestId('UiSelect__filter-input'));
    await fireEvent.click(select);

    await component.rerender({
      ...mockedProps,
      filterable: true,
    });
    await fireEvent.click(select);
    expect(component.baseElement).toContainElement(component?.queryByTestId('UiSelect__filter-input'));
  });

  it('Should contain the correct selected element', async () => {
    const select = component.getByTestId('UiSelect__select');

    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/John/i));
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('John');

    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Benjamin/i));
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Benjamin');

    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Harper/i));
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Harper');

    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Lucas/i));
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Lucas');
  });

  it('Should have clear selection option if props "clearable" is passed an is any element selected', async () => {
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Benjamin/i));
    expect(component.baseElement).not.toContainElement(component.queryByTestId('UiSelect__clear-selection'));

    await component.rerender({
      ...mockedProps,
      clearable: true,
    });
    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Lucas/i));
    expect(component.baseElement).toContainElement(component.queryByTestId('UiSelect__clear-selection'));
  });

  it('Should remove selected item if element responsible for cleaning is clicked', async () => {
    await component.rerender({
      ...mockedProps,
      clearable: true,
    });
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Benjamin/i));
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Benjamin');

    await fireEvent.click(select);
    await fireEvent.click(component.getByTestId('UiSelect__clear-selection'));
    expect(component.getByTestId('UiSelect__selected-item')).not.toHaveTextContent('Benjamin');
    expect(component.getByTestId('UiSelect__selected-item')).toHaveTextContent('Any');
  });

  it('Should filter the list correctly', async () => {
    await component.rerender({
      ...mockedProps,
      filterable: true,
    });
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);

    await fireEvent.update(component.getByTestId('UiSelect__filter-input'), 'Ben');
    expect(component.getByTestId('UiSelect__options-list').childElementCount).not.toBe(mockedProps.optionsList.length);
    expect(component.getByTestId('UiSelect__options-list').childElementCount).toBe(2);
    expect(component.getByTestId('UiSelect__options-list').textContent).not.toEqual(expect.stringContaining('Harper'));
    expect(component.getByTestId('UiSelect__options-list').textContent).not.toEqual(expect.stringContaining('Liam'));
    expect(component.getByTestId('UiSelect__options-list').textContent).toEqual(expect.stringContaining('Benjamin'));
    expect(component.getByTestId('UiSelect__options-list').textContent).toEqual(expect.stringContaining('Ben'));

    await fireEvent.update(component.getByTestId('UiSelect__filter-input'), 'Har');
    expect(component.getByTestId('UiSelect__options-list').childElementCount).not.toBe(mockedProps.optionsList.length);
    expect(component.getByTestId('UiSelect__options-list').childElementCount).toBe(1);
    expect(component.getByTestId('UiSelect__options-list').textContent).not.toEqual(expect.stringContaining('Benjamin'));
    expect(component.getByTestId('UiSelect__options-list').textContent).not.toEqual(expect.stringContaining('Liam'));
    expect(component.getByTestId('UiSelect__options-list').textContent).toEqual(expect.stringContaining('Harper'));
  });

  /** TESTS FOR COMPONENT EMITTING */
  it('Should emit "udpate:modelValue" and "change" with proper argument when user select an element', async () => {
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Benjamin/i));
    expect(component.emitted()['update:modelValue'][0]).toStrictEqual([(mockedProps.optionsList.find(el => el.name === 'Benjamin'))?.slug]);
    expect(component.emitted().change[0]).toStrictEqual([(mockedProps.optionsList.find(el => el.name === 'Benjamin'))?.slug]);

    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Harper/i));
    expect(component.emitted()['update:modelValue'][1]).toStrictEqual([(mockedProps.optionsList.find(el => el.name === 'Harper'))?.slug]);
    expect(component.emitted().change[1]).toStrictEqual([(mockedProps.optionsList.find(el => el.name === 'Harper'))?.slug]);
  });

  it('Should emit "clear" if element responsible for cleaning is clicked', async () => {
    await component.rerender({
      ...mockedProps,
      clearable: true,
    });
    const select = component.getByTestId('UiSelect__select');
    await fireEvent.click(select);
    await fireEvent.click(component.getByText(/Benjamin/i));
    await fireEvent.click(component.getByTestId('UiSelect__clear-selection'));
    expect(component.emitted().clear).toBeTruthy();
  });
});
