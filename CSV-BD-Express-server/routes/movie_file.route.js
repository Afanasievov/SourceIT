const Router = require('express').Router();
const FileRouter = require('./base/file.route');
const ModelProvider = require('../services/data.service');
const MovieModel = require('../models/movie.model');

new FileRouter(Router, new ModelProvider(MovieModel));

module.exports = Router;
