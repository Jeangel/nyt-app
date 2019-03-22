
import { FETCH_ARTICLES, ARTICLES_RECEIVED } from './actions';

const initialState = {
    articles: [],
    keywords: '',
    materialType: '',
    loading: false,
    page: 0,
    total: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES:

            const { materialType, keywords } = action.payload;

            /*If page 0 is searched I won't save previous articles
                Else, I'll keep them. Same with total */
            let _articles = (action.payload.page !== 0) ? state.articles : [];
            let _total = (action.payload.page !== 0) ? state.total : 0;

            return {
                ...state,
                materialType,
                keywords,
                page: 0,
                total: _total,
                articles: _articles,
                loading: true
            }
        case ARTICLES_RECEIVED:

            const { page, articles, total } = action.payload;

            /*If page 0 is searched I won't save previous articles but new ones
                Else, I'll keep both, new and old ones */
            let new_articles = (page !== 0) ? state.articles.concat(articles) : articles;

            return {
                ...state,
                articles: new_articles,
                page,
                total,
                loading: false
            };
        default:
            return state;
    }
}