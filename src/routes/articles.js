const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const UserData = require('../middleware/UserData')
const path = require('path');
const { addArticle, fetchArticle, editArticle, deleteArticle } = require("../controllers/articles")

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/'))
    }, filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post("/add", UserData, upload.single('img'), [
    check('title', 'Enter a valid title').isLength({ min: 3 }),
    check('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], addArticle)

router.get("/", fetchArticle)

router.put("/edit/:id", UserData, upload.single, editArticle)

router.delete("/delete/:id", UserData, deleteArticle)



module.exports = router