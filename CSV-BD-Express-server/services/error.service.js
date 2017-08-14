const codes = require('http-status-codes');
const logger = require('./logger.service');

module.exports = {
  notFound: (req, res, next) => {
    logger.error(`${req.url}: ${codes.getStatusText(codes.NOT_FOUND)}.`);
    const error = {
      code: codes.NOT_FOUND,
      message: codes.getStatusText(codes.NOT_FOUND),
    };

    next(error);
  },
  internal: (err, req, res, next) => {
    logger.error(`${err} : ${codes.getStatusText(codes.INTERNAL_SERVER_ERROR)}.`);
    const response = err.code ? err : {
      code: codes.INTERNAL_SERVER_ERROR,
      message: err.message,
    };
    res.status(response.code);
    res.json(response);
    next();
  },
};
