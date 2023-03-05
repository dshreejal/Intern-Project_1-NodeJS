const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
require('dotenv/config');
const config = require('../config/config');
const userService = require('../services/auth')
const JWT_SECRET = config.dev.jwt.secret
const logger = require('../utils/logger');
const { sendResponse, HttpStatus } = require('../utils/apiResponse');

/**
 * This function handles the registration of a user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, HttpStatus.BAD_REQUEST, false, null, "Some fields not filled properly", errors.array());
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
        sendResponse(res, HttpStatus.CREATED, true, result, "User created successfully", null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}

/**
 * This function handles the login of a user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendResponse(res, HttpStatus.BAD_REQUEST, false, null, "Some fields not filled properly", errors.array());
    }

    try {
        const { email, password } = req.body;
        let user = await userService.loginUser(email, password);

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        sendResponse(res, HttpStatus.OK, true, authToken, "Logged In successfully", null);
    } catch (error) {
        logger.log('error', `${error.message}`);
        next(error);
    }
}