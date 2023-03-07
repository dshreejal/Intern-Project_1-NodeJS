const app = require('./app');
const logger = require('./utils/logger');
const config = require("./config/config")
const PORT = config.dev.app.port;

app.listen(PORT, () => {
    logger.log('info', `Backend server running at https://localhost:${PORT}`);
})