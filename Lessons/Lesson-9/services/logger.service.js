const winston = require('winston');

const transport = new (winston.transports.Console)({
  level: 'debug',
  colorize: true,
});
const logger = new (winston.Logger)({
  transports: [transport],
});

class Logger {
  constructor(log) {
    this.logger = log;
  }

  info(msg) {
    this.logger.info(msg);
  }

  error(msg) {
    this.logger.error(msg);
  }
}

module.exports = new Logger(logger);
