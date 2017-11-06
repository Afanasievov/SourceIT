class BaseRouter{
  constructor(router) {
    this.router = router;
    this.router.get('/', this.get.bind(this));
  }

  get(req, res){
    res.send('Hello from custom router');
  }
}

module.exports = BaseRouter