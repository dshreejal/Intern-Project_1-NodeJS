const { sendResponse, HttpStatus } = require('../utils/apiResponse');

const errorHandler = (error, req, res, next) => {
    return sendResponse(res, error.status || HttpStatus.INTERNAL_SERVER_ERROR, false, null, "Internal Server Error", error.message);
};

module.exports = errorHandler;