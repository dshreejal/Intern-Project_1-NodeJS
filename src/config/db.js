const mongoose = require("mongoose");
require("dotenv/config")
try {
    const connectToMongo = async () => {
        await mongoose.connect(process.env.MongoURL)
    }
    module.exports = connectToMongo;
} catch (error) {
    console.log(error);
}

