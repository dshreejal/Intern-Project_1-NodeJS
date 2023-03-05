const express = require("express");
const app = express();
const cors = require('cors');
const config = require("./config/config")
const connectToMongo = require("./config/db")
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');

// Fetch the server port number from the configuration file
const port = config.dev.app.port;

connectToMongo();

app.use((cors()));
app.use(express.json());

app.use("/api/articles", require("./routes/articles"))
app.use("/api/auth", require("./routes/auth"))

// Handle undefined routes error
app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
})
app.use(errorHandler);
app.listen(port, () => {
    logger.log('info', `Backend server running at https://localhost:${port}`);
})

module.exports = app;
