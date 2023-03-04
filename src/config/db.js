const mongoose = require("mongoose");
const logger = require('../utils/logger')
require("dotenv/config")
try {
    const connectToMongo = async () => {
        await mongoose.connect(process.env.MongoURL);
        logger.log('info', 'Connected to database successfull');

    }
    module.exports = connectToMongo;
} catch (error) {
    logger.log("error", "Unable to connect to database")
}

