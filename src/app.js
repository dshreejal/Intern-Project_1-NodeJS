const express = require("express");
const app = express();
const cors = require('cors');
const connectToMongo = require("./config/db")
const errorHandler = require('./middleware/errorHandler');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs');



connectToMongo();

app.use((cors()));
app.use(express.json());
app.use("/images", express.static("../public/images"));

app.use("/api/articles", require("./routes/articles"))
app.use("/api/auth", require("./routes/auth"))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
// Handle undefined routes error
app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})
app.use(errorHandler);


module.exports = app;
