const jwt = require('jsonwebtoken');
require('dotenv/config');
const config = require('../config/config');
const JWT_SECRET = config.dev.jwt.secret;

/**
 * This middleware function verifies the authenticity of the JWT token provided in the header.
 * If the token is valid, it sets the user information in the request object.
 * If the token is not valid, it sends an error response with status code 401.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Object} next - Express next function.
*/
const FetchUser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}


module.exports = FetchUser;