const routes = require('../../constants/routes');

class FileRouter {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.router.get(routes.default, this.get.bind(this));
    this.router.post(routes.default, this.post.bind(this));
  }

  get(req, res) {
    this.dataService
      .find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

  post(req, res, next) {
    this.dataService.bulkCreate(req.body)
      .then(data => res.json(data))
      .catch(err => next(err));
  }
}

module.exports = FileRouter;
