const { createLogger, transports, format } = require('winston');

const Logger = createLogger({
    transports: [
        new transports.File({
            filename: 'src/logs/logEvents.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'src/logs/errorEvents.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
});

module.exports = Logger;