import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import HomePage from '../../src/components/HomePage';

xdescribe('HomePage.vue test', () => {
  const store = createStore({
    state() {
      return {
        currentArticle: ''
      };
    }
  });

  it('should render', () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.vm.$options.name).toMatch('HomePage');

    // Validar se os componentes estao aqui
    // wrapper.findComponent({ name: 'Foo' })
  });
});