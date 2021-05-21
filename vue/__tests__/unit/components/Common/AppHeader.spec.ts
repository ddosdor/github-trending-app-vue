import { mount } from '@vue/test-utils';
import AppHeader from '@/components/Common/AppHeader.vue';

describe('components/Common/AppHeader', () => {
  it('Should exists', () => {
    let component = mount(AppHeader);
    expect(component).toBeTruthy();
  });
});
