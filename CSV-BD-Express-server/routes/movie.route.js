const Router = require('express').Router();
const BaseRouter = require('./base/base.route');
const ModelProvider = require('../services/data.service');
const MovieModel = require('../models/movie.model');

const searchingCriteria = {
  IsActive: true,
  Title: null,
  ReleaseYear: null,
  Director: null,
};

new BaseRouter(Router, new ModelProvider(MovieModel, searchingCriteria));

module.exports = Router;
