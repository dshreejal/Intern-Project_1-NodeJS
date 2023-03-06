const getArticles = require('./articles/get-articles');
const createArticle = require('./articles/create-article');
const editArticle = require('./articles/edit-article')
const deleteArticle = require('./articles/delete-article');
const loginUser = require('./users/login-user')
module.exports = {
    paths: {
        '/api/articles': {
            ...getArticles,
        },
        '/api/articles/add': {
            ...createArticle,
        },
        '/api/articles/edit/{id}': {
            ...editArticle,
        },
        '/api/articles/delete/{id}': {
            ...deleteArticle,
        },
        '/api/auth/register': {
            ...loginUser,
        },
    }
}