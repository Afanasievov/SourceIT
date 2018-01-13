const router = require('express').Router();
const routes = require('../constants/routes');
const codes = require('http-status-codes');
const logger = require('../services/logger.service');

router.get(routes.defaultRouter, (req, res) => {
  logger.info('I\'m working');
  logger.error('I\'m working');
  res.json({
    code: codes.OK,
    messages: 'Working',
  });
});

router.post(routes.defaultRouter, (req, res) => {
  res.json({
    code: codes.OK,
    body: req.body,
    message: 'Working',
  });
});

module.exports = router;
