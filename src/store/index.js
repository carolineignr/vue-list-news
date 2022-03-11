import { createStore } from "vuex";

export default createStore({
	state: {
		articles: [],
		currentArticle: null
	},
	mutations: {
		SET_ARTICLES_LIST(state, payload) {
			state.articles = payload;
		},
		SET_ARTICLE(state, payload) {
			state.currentArticle = payload;
		}
	},
	actions: {
		setArticlesList(context, payload) {
			let list = context.state.articles;
			list = payload;
			context.commit('SET_ARTICLES_LIST', list);
		},
		setCurrentArticle(context, payload) {
			let article = context.state.currentArticle ;
			article = payload;
			context.commit('SET_ARTICLE', article);
		}
	}
});