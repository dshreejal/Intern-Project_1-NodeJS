const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true },);

module.exports = mongoose.model("article", ArticleSchema)