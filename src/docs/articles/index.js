const getArticles = require('./get-articles');


module.exports = {
    paths: {
        '/api/articles': {
            ...getArticles,
        },

    }
}