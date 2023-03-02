const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


const { registerUser } = require("../controllers/auth")

//Register
router.post("/register", [
    body('fname', 'Enter a valid first name').isLength({ min: 3 }),
    body('lname', 'Enter a valid last name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], registerUser)


module.exports = router