const { validationResult } = require("express-validator")
const articleService = require("../services/articles")
const logger = require('../utils/logger');
const { sendResponse, HttpStatus } = require('../utils/apiResponse');

/**
 * This function handles the addition of a new article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.addArticle = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, HttpStatus.BAD_REQUEST, false, null, "Some fields not filled properly", errors.array());
    }

    try {
        const { title, description } = req.body;
        // Call the article service to add the new article
        const savedArticle = await articleService.addArticle(title, description, req.user.id);
        sendResponse(res, HttpStatus.CREATED, true, savedArticle, 'Article created successfully', null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}

/**
 * This function handles the fetching of articles.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.fetchArticle = async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 8;
        const titleQuery = req.query.title || '';
        const sortParam = req.query.sort || '';

        const articles = await articleService.fetchArticle(titleQuery, sortParam, page, limit);
        sendResponse(res, HttpStatus.OK, true, articles, 'Data fetched successfully', null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}

/**
 * This function handles the editing of an article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.editArticle = async (req, res, next) => {
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
        sendResponse(res, HttpStatus.OK, true, updatedArticle, 'Article Edited successfully', null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}

/**
 * This function handles the deletion of an article.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.deleteArticle = async (req, res, next) => {
    try {
        let article = await articleService.findArticleById(req.params.id);

        if (!article) {
            return sendResponse(res, HttpStatus.NOT_FOUND, false, null, "Article not found", "Article Not Found");
        }

        await articleService.deleteArticle(req.params.id, req.user.id);
        sendResponse(res, HttpStatus.OK, true, null, 'Article Deleted Successfully', null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}