<template>
	<div v-if="!article">
		<empty-section v-bind:description="emptyMessage"/>
	</div>

  <article v-else class="article">
		<section class="header">
			<div class="info">
				<span class="author">{{ article.author }}</span> 
        <span v-if="article.author"> | </span>
				<span class="date">{{ formatedDate(article.publishedAt) }}</span>	
			</div>
			<a v-bind:href="article.url">Original article</a>
		</section>
		<h2 class="title">{{ article.title }}</h2>
		<img v-bind:src="article.urlToImage">
		<p class="description">{{ article.description }}</p>
		<section class="content">
			{{ article.content }}
		</section>
  </article>
</template>

<script>
import EmptySection from './EmptySection.vue';

export default {
	name: 'ArticlesDetail',
	data() {
		return {
			emptyMessage: 'No article have been selected yet. Choose one to read the details.'
		}
	},
	components: {
		EmptySection
	},
	computed: {
		article() { return this.$store.state.currentArticle }
	},
	methods: {
		formatedDate(date) {
			return new Date(date).toLocaleDateString()
		}
	}
}
</script>

<style lang="scss">
	a {
		font-size: 0.7rem;
	}

	.article {
		height: 100%;

		h2 {
			margin-top: 0;
		}
	}

	.content {
		text-align: justify;
	}

	.info {
		font-size: .7rem;
		display: inline;

		.author, .date {
			display: inline;
		}

		.author {
			font-weight: bold;
		}

		img {
			max-height: calc(100% / 2);
		}
	}

	.description {
		margin: 1.5rem;
		text-align: center;
		font-size: .9rem;
		padding: .5rem;
		border-top: 1.5px solid black;
		border-bottom: 1.5px solid black;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}
</style>