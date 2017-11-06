const Router = require('express').Router;
const BaseRouter = require('./base-router');
const router = Router();

class CustomRouter extends BaseRouter {
  get(req, res) {
    res.send('this is new method');
  }
}

new CustomRouter(router);

module.exports = router;