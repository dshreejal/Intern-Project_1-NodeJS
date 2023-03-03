const { validationResult } = require("express-validator")
const Article = require("../models/Article")
const articleService = require("../services/articles")

//Controller Function
exports.addArticle = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description } = req.body;
        const savedArticle = await articleService.addArticle(title, description, req.user.id);
        res.json(savedArticle)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.fetchArticle = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 8;
        const titleQuery = req.query.title || '';
        const sortParam = req.query.sort || '';

        const articles = await articleService.fetchArticle(titleQuery, sortParam, page, limit);
        res.json(articles);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.editArticle = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newArticle = {}
        if (title) { newArticle.title = title }
        if (description) { newArticle.description = description }


        let article = await Article.findById(req.params.id);
        if (!article) { return res.status(404).send("Not Found") }

        //Check if the user logged in is accessing the data or not
        if (article.user.toString() !== req.user.id) {
            return res.status(401).send("Unauthorized")
        }

        //update note
        article = await Article.findByIdAndUpdate(req.params.id, { $set: newArticle }, { new: true })
        res.json({ article })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.deleteArticle = async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);
        if (!article) { return res.status(404).send("Not Found") }

        //Check if user logged in is accessing the note or not. only allow logged in user to delete
        if (article.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        article = await Article.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Article has been deleted successfully", })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}