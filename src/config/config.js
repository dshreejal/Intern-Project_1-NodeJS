require('dotenv').config();

const env = process.env.NODE_ENV; // dev or test
const dev = {
    app: {
        port: process.env.PORT
    },
    db: {
        host: process.env.MongoURL
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}

const config = {
    dev
}

module.exports = config;