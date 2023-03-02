const express = require("express");
const router = express.Router();
const { body } = require("express-validator");


const { registerUser, loginUser } = require("../controllers/auth")

//Register
router.post("/register", [
    body('fname', 'Enter a valid first name').isLength({ min: 3 }),
    body('lname', 'Enter a valid last name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], registerUser)

router.post("/login", [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').isLength({ min: 5 }),
], loginUser)


module.exports = router