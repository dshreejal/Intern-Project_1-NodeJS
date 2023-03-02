const express = require("express");
const router = express.Router();
const { body } = require('express-validator');
const UserData = require('../middleware/UserData')

const { addArticle, fetchArticle, editArticle, deleteArticle } = require("../controllers/articles")

router.post("/add", UserData, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('tag', 'Tag must not be blank').isLength({ min: 3 }),
], addArticle)

router.get("/", fetchArticle)

router.put("/edit/:id", UserData, editArticle)

router.delete("/delete/:id", UserData, deleteArticle)



module.exports = router