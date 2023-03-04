const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
require('dotenv/config');
const config = require('../config/config');
const userService = require('../services/auth')
const JWT_SECRET = config.dev.jwt.secret
const logger = require('../utils/logger');

/**
 * This function handles the registration of a user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
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
        logger.log('error', `${error.message}`);
        res.status(500).send('Internal Server Error');
    }
}

/**
 * This function handles the login of a user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        let user = await userService.loginUser(email, password);

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ authToken, "success": true, "message": "Logged IN successfully" })
    } catch (error) {
        logger.log('error', `${error.message}`);
        res.status(500).send("Internal Server Error");
    }
}