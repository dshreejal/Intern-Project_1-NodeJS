const { validationResult } = require("express-validator")
const articleService = require("../services/articles")
const logger = require('../utils/logger');

/**
 * This function handles the addition of a new article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.addArticle = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description } = req.body;
        // Call the article service to add the new article
        const savedArticle = await articleService.addArticle(title, description, req.user.id);
        res.json(savedArticle)
    } catch (error) {
        logger.log('error', `${error.message}`);
        res.status(500).send("Internal Server Error");
    }
}

/**
 * This function handles the fetching of articles.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.fetchArticle = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 8;
        const titleQuery = req.query.title || '';
        const sortParam = req.query.sort || '';

        const articles = await articleService.fetchArticle(titleQuery, sortParam, page, limit);
        res.json(articles);
    } catch (error) {
        logger.log('error', `${error.message}`);
        res.status(500).send("Internal Server Error");
    }
}

/**
 * This function handles the editing of an article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.editArticle = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newArticleData = {};
        if (title) {
            newArticleData.title = title;
        }
        if (description) {
            newArticleData.description = description;
        }

        const updatedArticle = await articleService.editArticle(
            req.params.id,
            req.user.id,
            newArticleData
        );

        res.json({ updatedArticle });
    } catch (error) {
        logger.log('error', `${error.message}`);
        res.status(500).send("Internal Server Error");
    }
}

/**
 * This function handles the deletion of an article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.deleteArticle = async (req, res) => {
    try {
        let article = await articleService.findArticleById(req.params.id);

        if (!article) {
            return res.status(404).send("Not Found")
        }

        await articleService.deleteArticle(req.params.id, req.user.id);
        res.json({ "Success": "Article has been deleted successfully", })
    } catch (error) {
        logger.log('error', `${error.message}`);
        res.status(500).send("Internal Server Error");
    }
}