import { shallowMount } from '@vue/test-utils';
import UiAvatar from '@/components/Common/Ui/UiAvatar.vue';

describe('components/Common/Ui/UiAvatar', () => {
  it('Should exists', () => {
    const component = shallowMount(UiAvatar, {
      props: {
        avatar: '',
      },
    });
    expect(component).toBeTruthy();
  });

  it('Should render img element with given avatar image', () => {
    const component = shallowMount(UiAvatar, {
      props: {
        avatar: 'avatar.png',
      },
    });
    expect(component.find('img').attributes('src')).toBe('avatar.png');
  });

  it('"normalAndDeault should be true if there is no props like small or large"', () => {
    const component = shallowMount(UiAvatar, {
      props: {
        avatar: 'avatar.png',
      },
    });

    expect(component.vm.normalAndDefault).toBe(true);
  });
});
