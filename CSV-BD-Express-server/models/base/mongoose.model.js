const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = Promise;

module.exports = new Schema({
  IsActive: {
    type: Boolean,
    default: true,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false,
});
