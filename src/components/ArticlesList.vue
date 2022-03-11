<template>
	<div class="container">
		<label>Search for an article by it's title name</label>
		<input v-model="searchQuery">

		<div class="cards__container">
			<div v-if="loading" class="spin"></div>
			<div v-else v-for="(article, index) in filteredArticles" :key="index">
				<div class="card">
					<img />
					<div>
						<p>{{ article.title }}</p>
						<span>{{ truncatedDescription(article.description) }}</span>
					</div>
					<button v-on:click="setCurrentArticle(index)">Read more</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArticlesList',
	data() {
		return {
			searchQuery: null
		}
	},
	props: {
		loading: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		articles() { return this.$store.state.articles },
		filteredArticles() {
			if (this.searchQuery) {
				return this.filterArticles();
			}
			return this.articles;
		}
	},
	methods: {
		filterArticles() {
			return this.articles.filter(({ title}) => {
				return this.searchQuery.toLowerCase().split(" ").every(query => {
					return title.toLowerCase().includes(query);
				})
			})
		},
		truncatedDescription(value) {
			return value.length > 50 ? value.slice(0, 80) + '...' :  value;
		},
		setCurrentArticle(index) {
			this.$store.dispatch('setCurrentArticle', this.filteredArticles[index]);
		}
	}
}
</script>

<style lang="scss">
	p {
		margin: 0 0 5px 0;
		font-weight: bold;
	}

	button { 
		cursor: pointer;
	}

	label {
		text-align: left;
		font-weight: bold;
	}

	.cards__container {
		text-align: left;
		margin: 20px 0;
		height: 70vh;
		overflow-x: hidden;
    overflow-y: scroll;
	}

	.card {
		display: flex;
		flex-direction: column;
		border: 0.5px solid rgba(71, 71, 71, 0.342);
		border-radius: 5px;
		margin-bottom: 1.25rem;
		padding: 1rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, 
			rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}

		button { 
			align-self: end;
		}

	}

	@keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }

  .spin {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px #cfd0d1;
    border-bottom-color: #2c2c2c69;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 25rem;
		left: 15.2rem;
  }
</style>
