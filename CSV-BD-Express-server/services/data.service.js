require('./base/mongo.provider');
const codes = require('http-status-codes');
const messages = require('../constants/messages');
const getSearchingCriteria = require('../services/get_searching_criteriia');
const defaultValues = require('../constants/default_values');
class ModelProvider {
  constructor(model, options = {}) {
    this._model = model;
    this._options = options;
  }

  create(model) {
    return Promise.resolve()
      .then(() => getSearchingCriteria(this._options, model))
      .then((searchingCriteria) => this._model.find(searchingCriteria))
      .then((data) => {
        if (data.length) {
          return Promise.reject({
            code: codes.BAD_REQUEST,
            message: messages.modelDuplicated,
          });
        }
      })
      .then(() => new this._model(model).save())
      .then((data) => data);
  }

  bulkCreate(model) {
    return this._model
      .insertMany(model)
      .then((data) => ({ created: data.length }));
  }

  findById(id) {
    return this._model
      .findById(id)
      .then((data) => data);
  }

  find(itemsPerPage = defaultValues.itemsPerPage, page = 0) {
    const searchingCriteria = { IsActive: true };

    const countQuery = this._model
      .count()
      .exec((count) => count);
    const findQuery = this._model
      .find(searchingCriteria)
      .limit(+itemsPerPage)
      .skip(+page * itemsPerPage)
      .exec((data) => data);

    return Promise.all([countQuery, findQuery])
      .then(([count, data]) => ({ count, data }));
  }

  findAll() {
    const searchingCriteria = { IsActive: true };

    return this._model
      .find(searchingCriteria)
      .exec();
  }

  update(model) {
    const _id = model._id;

    return this.findById(_id)
      .then(() => this._model.update(
        { _id },
        { $set: model },
      ));
  }

  remove(id) {
    return this.findById(id)
      .then(() => this._model.update(
        { _id: id },
        { $set: { IsActive: false } },
      ));
  }
}

module.exports = ModelProvider;
