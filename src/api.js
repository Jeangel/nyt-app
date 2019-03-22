export const getArticles = (keywords, materialType, page) => {

    const _page = page || 0;

    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=type_of_material:%22${materialType}%22&q=${keywords}&page=${_page}&api-key=${process.env.REACT_APP_API_KEY}`)
        .then(e => e.json());
}