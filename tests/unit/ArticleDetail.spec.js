import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import ArticleDetail from '../../src/components/ArticleDetail';

describe('ArticleDetail.vue test', () => {
  const store = createStore({
    state() {
      return {
        currentArticle: null
      };
    }
  });

  it('should render', () => {
    const wrapper = shallowMount(ArticleDetail, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.vm.$options.name).toMatch('ArticleDetail');
  });

  // it renders empty state when currentarticle is null
  // wrapper.findComponent({ name: 'Empty Section' })  })
});