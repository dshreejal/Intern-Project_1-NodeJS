const Article = require("../models/Article");

//Service Function
exports.addArticle = async (title, description, userID) => {
    const article = new Article({ title, description, user: userID });
    const savedArticle = await article.save();
    return savedArticle;
}

exports.fetchArticle = async (titleQuery, sortParam, page, limit) => {
    const skip = (page - 1) * limit;
    const query = titleQuery ? { title: new RegExp(titleQuery, 'i') } : {};
    const sort = sortParam ? `${sortParam}` : '';
    const articles = await Article.find(query).limit(limit).skip(skip).sort(sort);
    return articles;
}

exports.editArticle = async (articleId, userId, newArticleData) => {
    try {
        let article = await Article.findById(articleId);
        if (!article) {
            throw new Error('Article not found');
        }

        //Check if the user logged in is accessing the data or not
        if (article.user.toString() !== userId) {
            throw new Error('Unauthorized');
        }

        const updatedArticle = await Article.findByIdAndUpdate(
            articleId,
            { $set: newArticleData },
            { new: true }
        );
        return updatedArticle;
    } catch (error) {
        throw new Error(error.message);
    }
}

exports.findArticleById = async (id) => {
    return await Article.findById(id);
}

exports.deleteArticle = async (id, userId) => {
    let article = await Article.findById(id);

    // If the article does not exist, throw an error
    if (!article) {
        throw new Error("Article not found");
    }

    // Check if the user is authorized to delete the article
    if (article.user.toString() !== userId) {
        throw new Error("Not authorized to delete this article");
    }

    // Delete the article
    return await Article.findByIdAndDelete(id);
}