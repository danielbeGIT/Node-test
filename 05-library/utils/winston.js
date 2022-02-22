const { transports } = require('winston');
const winston = require('winston'); 

const logger = () => { 

    const myFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
        return `[${timestamp}] [${level}] [${meta.file}] ${message} `;
    });

    var log = winston.createLogger({
        level: 'info', 
        format: winston.format.combine(             // combine all the winston format methods
            winston.format.colorize(),              // will show error message with color
            winston.format.timestamp({              // will show timestamp based on UNIX
                format: 'YYYY-MM-DD HH:mm:ss'       // to change the timestamp format to Year-Month-Day Hour-Minute-Second
            }),
            winston.format.splat(),
            myFormat                                // will show error message through myFormat function
        ),

        defaultMeta: { file : "" },  
        transports: [
            new winston.transports.Console()
        ]
    });
    
    return log;
}

module.exports = logger;