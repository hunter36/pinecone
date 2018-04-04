/**
 * Created by liuzhi on 2017/6/30.
 */
//日志处理
const winston = require('winston');
let logger;
if(process.env.NODE_ENV == 'development') {
    logger = winston;
} else {
    logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                name: 'info-file',
                filename: 'filelog-info.log',
                level: 'info'
            }),
            new (winston.transports.File)({
                name: 'error-file',
                filename: 'filelog-error.log',
                level: 'error'
            })
        ],
        exceptionHandlers: [
            new winston.transports.File({ filename: 'exceptions.log' })
        ]
    });
}

module.exports = logger;