require('./base/mongo.provider');
const codes = require('http-status-codes');
const messages = require('../constants/messages');

class ModelProvider {
  constructor(model, options = {}) {
    this._model = model;
    this._options = options;
  }

  create(model) {
    return this
      .find(this._options.searchingCriteria)
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

  bulkCreate(model) {
    return this._model
      .insertMany(model)
      .then(data => ({ created: data.length }));
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
