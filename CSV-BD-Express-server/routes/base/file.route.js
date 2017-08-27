const routes = require('../../constants/routes');
const arrToCsv = require('../../services/arr_to_csv');

class FileRouter {
  constructor(router, dataService) {
    this.router = router;
    this.dataService = dataService;
    this.router.get(routes.default, this.get.bind(this));
    this.router.post(routes.default, this.post.bind(this));
  }

  get(req, res) {
    this.dataService
      .findAll()
      .then(data => arrToCsv(data))
      .then(data => res.send(data))
      .catch(err => res.json(err));
  }

  post(req, res, next) {
    this.dataService.bulkCreate(req.body)
      .then(data => res.json(data))
      .catch(err => next(err));
  }
}

module.exports = FileRouter;
