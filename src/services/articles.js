const Article = require("../models/Article");

//Service Function
exports.addArticle = async (title, description, userID) => {
    const article = new Article({ title, description, user: userID });
    const savedArticle = await article.save();
    return savedArticle;
}