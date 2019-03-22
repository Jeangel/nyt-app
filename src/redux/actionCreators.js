import { FETCH_ARTICLES } from './actions';

export function fetchArticles(keywords, materialType, _page) {

    const page = _page || 0;

    return {
        type: FETCH_ARTICLES,
        payload: {
            keywords,
            materialType,
            page
        }
    }
}
