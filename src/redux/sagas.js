import { put, takeLatest, all } from 'redux-saga/effects';
import { getArticles } from './../api';
import { ARTICLES_RECEIVED, FETCH_ARTICLES } from './actions';

function* fetchArticles({ payload }) {
    const { keywords, materialType, page } = payload;


    const articles = yield getArticles(keywords, materialType, page);
    
    yield put({
        type: ARTICLES_RECEIVED,
        payload: {
            articles: articles.response.docs, 
            total: articles.response.meta.hits,
            page
        }
    });
}


function* actionWatcher() {
    yield takeLatest(FETCH_ARTICLES, fetchArticles)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}