const codes = require('http-status-codes');
const logger = require('./logger.service');

module.exports = {
  notFound: (req, res) => {
    logger(`${req.url}: ${codes.getStatusText(codes.NOT_FOUND)}`);
    res.status(codes.NOT_FOUND);
    res.json({
      code: codes.NOT_FOUND,
      message: codes.getStatusText(codes.NOT_FOUND),
    });
  },
  internal: (err, req, res, next) => {
    logger.error(`${codes.getStatusText(codes.INTERNAL_SERVER_ERROR)}:\n${err}`);
    res.status(codes.INTERNAL_SERVER_ERROR);
    res.json({
      code: codes.INTERNAL_SERVER_ERROR,
      message: codes.getStatusText(codes.INTERNAL_SERVER_ERROR),
    });
  },
};
