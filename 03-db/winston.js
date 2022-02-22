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

        // transport/log to a file, filename = winston.log and it will only log up to level 'error'
        // new winston.transports.File({
        //     filename: 'winston.log',
        //     level: 'error'
        // })

    ]
});

log.error('Error message');
log.warn('Warn error message');
log.info('Info error message');
log.http('HTTP error message');
log.verbose('Verbose error message');
log.debug('Debug error message');
log.silly('Silly error message');

const person = { id: 10, name: "martin", email: "martin@email.nu" };
// DO NOT DO THIS
log.info("%s just logged in with %s", person.name, person.email);

