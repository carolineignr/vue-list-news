<template> 
  <div class="page__wrapper">
    <div v-if="articles.length">
      <header>
        <h1>{{ title }}</h1>
        <p>Choose an article in the list below and read the details.</p>
      </header>
      <main>
        <article-detail class="right" />
        <div class="divider"></div>
        <articles-list class="left" v-bind:loading="loading" />
      </main>
      <button v-on:click="getArticles">{{ buttonGetArticles }}</button>
    </div>
    <div v-else>
      <h1>{{ title }}</h1>
      <empty-section v-bind:description="error || genericError" />
    </div>
  </div>
</template>

<script>
import ArticleDetail from './ArticleDetail.vue';
import ArticlesList from './ArticlesList.vue';
import EmptySection from './EmptySection.vue';

export default {
	name: 'HomePage',
	data() {
		return {
      articles: [],
			title: 'Articles List',
			buttonGetArticles: 'Refresh articles list',
			loading: false,
			error: null,
      genericError: 'Sorry, something is going wrong. Try again later.'
		}
	},
	beforeMount() {
		this.getArticles();
	},
	components: {
		ArticleDetail,
		ArticlesList,
		EmptySection
	},
	methods: {
		async getArticles() {
			const api = 'http://0.0.0.0:8000';
			const endpoint = '/v1/news/';
			const options = { method: 'GET' };

			this.loading = true;

			const response = await fetch(api + endpoint, options);
      
      if (response.ok) {
				const { articles } = await response.json();
				this.$store.dispatch('setArticlesList', articles);
        this.articles = this.$store.state.articles;
      } else {
        this.error = `Unfortunately we can't reach the articles list because of error '${response.statusMessage}'.`;
      }
			
      this.loading = false;
		}
	}
}
</script>

<style lang="scss">
  .page__wrapper {
    margin: 3rem;
    text-align: center;
  }

  main {
    display: flex;
    flex-flow: row-reverse;
    justify-content: space-between;
    margin-top: 1.25rem;
  }

  header {
    text-align: left;
  }

  .left, .right {
    display: flex;
		flex-direction: column;
    flex: 1 1 0;
    height: 70vh;
    margin: 0.75rem 1.25rem;
    overflow-y: scroll;
  }

  .right {
    text-align: left;
  }

  .divider {
    border-left: 2px solid rgba(0, 0, 0, 0.514);
    height: 70vh;
  }

  @media (max-width: 800px) {
    main {
      display: block;
    }

    .divider {
      border-top: 2px solid rgba(0, 0, 0, 0.514);
      width: 70vw;
      border-left: none;
      height: auto;
      margin: 2rem auto;
    }

    .right {
      height: auto;
    }
  }
</style>
