const getArticles = require('./get-articles');
const createArticle = require('./create-article');

module.exports = {
    paths: {
        '/api/articles': {
            ...getArticles,
        },
        '/api/articles/add': {
            ...createArticle,
        }
    }
}