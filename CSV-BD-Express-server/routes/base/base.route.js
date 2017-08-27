const routes = require('../../constants/routes');

class BaseRouter {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.router.get(routes.default, this.get.bind(this));
    this.router.post(routes.default, this.post.bind(this));
    this.router.delete(routes.byId, this.delete.bind(this));
    this.router.put(routes.byId, this.put.bind(this));
  }

  get(req, res) {
    this.dataService
      .find(req.query.itemsPerPage, req.query.page)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

  post(req, res, next) {
    this.dataService.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }

  put(req, res) {
    this.dataService
      .update(req.body)
      .then((data) => res.json(data));
  }

  delete(req, res) {
    this.dataService.remove(req.params.id)
      .then((data) => res.json(data));
  }
}

module.exports = BaseRouter;
