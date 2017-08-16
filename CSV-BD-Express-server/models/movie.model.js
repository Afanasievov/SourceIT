const mongoose = require('mongoose');
const modelNames = require('../constants/models');
require('mongoose-schema-extend');

const SchemaBase = require('./base/mongoose.model');

const movieSchema = SchemaBase.extend({
  Id: {
    type: Number,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  ReleaseYear: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Cast: {
    type: String,
    required: true,
  },
  Director: {
    type: String,
    required: true,
  },
  Runtime: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model(modelNames.Movie, movieSchema);

module.exports = Movie;
