const HttpStatus = require('http-status');

exports.sendResponse = (res, statusCode, success, data, message, error) => {
    const responseData = {
        success: success,
        data: data,
        message: message,
        error: error
    };
    res.status(statusCode).json(responseData);
};

exports.HttpStatus = HttpStatus;