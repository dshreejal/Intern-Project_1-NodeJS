require('dotenv').config();

const env = process.env.NODE_ENV || dev; // dev or test
const dev = {
    app: {
        port: process.env.PORT || 3001
    },
    db: {
        host: process.env.MongoURL || "mongodb://localhost/test-db"
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}

const config = {
    dev
}

module.exports = config;