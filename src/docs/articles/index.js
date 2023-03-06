const getArticles = require('./get-articles');
const createArticle = require('./create-article');
const deleteArticle = require('./delete-article');
module.exports = {
    paths: {
        '/api/articles': {
            ...getArticles,
        },
        '/api/articles/add': {
            ...createArticle,
        },
        '/api/articles/delete/{id}': {
            ...deleteArticle,
        },
    }
}