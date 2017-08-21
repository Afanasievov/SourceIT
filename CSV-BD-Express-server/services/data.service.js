require('./base/mongo.provider');
const codes = require('http-status-codes');
const messages = require('../constants/messages');

class ModelProvider {
  constructor(model, options = {}) {
    this._model = model;
    this._options = options;
  }

  create(model) {
    const searchingCriteria = {
      IsActive: true,
      Title: model.Title,
      ReleaseYear: model.ReleaseYear,
      Director: model.Director,
    };

    return this
      .find(searchingCriteria)
      .then((data) => {
        if (data.length) {
          return Promise.reject({
            code: codes.BAD_REQUEST,
            message: messages.modelDuplicated,
          });
        }

        return true;
      })
      .then(() => new this._model(model).save())
      .then(data => data);
  }

  findById(id) {
    return this._model
      .findById(id)
      .then(data => data);
  }

  find() {
    const searchingCriteria = {
      IsActive: true,
    };
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
