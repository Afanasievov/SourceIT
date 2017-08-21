const Router = require('express').Router();
const BaseRouter = require('./base/base.route');
const ModelProvider = require('../services/data.service');
const MovieModel = require('../models/movie.model');

new BaseRouter(Router, new ModelProvider(MovieModel));

module.exports = Router;
