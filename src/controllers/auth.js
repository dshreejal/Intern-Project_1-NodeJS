const { validationResult } = require("express-validator")
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv/config');
const config = require('../config/config');
const userService = require('../services/auth')
const JWT_SECRET = config.dev.jwt.secret

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const userData = {
            fname: req.body.fname,
            lname: req.body.lname,
            name: req.body.fname + " " + req.body.lname,
            email: req.body.email,
            password: req.body.password
        };
        const result = await userService.registerUser(userData);
        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Please try to login using correct Credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(401).json({ error: "Please try to login using correct Credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        const msg = "Logged In successfully"
        res.json({ authToken, msg })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}