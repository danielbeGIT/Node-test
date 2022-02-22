const { transports } = require('winston');
const winston = require('winston');

const myFormat = winston.format.printf(( { level, message, timestamp } ) => {
    // a way to decide what order the message, timesatmp and level will show in
    return `${timestamp} ${level} ${message}`;          // using ``(backticks) to be able to use the variables in the string
});

const log = winston.createLogger({
    // decide what level to log up to
    // level: 'info' will log up to silly and nothing under it
    level: 'info',
    format: winston.format.combine(             // combine all the winston format methods
        winston.format.colorize(),              // will show error message with color
        winston.format.timestamp({              // will show timestamp based on UNIX
            format: 'YYYY-MM-DD HH:mm:ss'       // to change the timestamp format to Year-Month-Day Hour-Minute-Second
        }),
        winston.format.splat(),
        myFormat                                // will show error message through myFormat function
    ),
    // meta,
    transports: [
        // transport/log to console
        new winston.transports.Console()
    ]
});

module.exports = log;