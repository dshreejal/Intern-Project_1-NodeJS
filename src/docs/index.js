const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags')
const components = require('./components');
const articles = require('./articles');
module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...articles,
};