const express = require('express');
const morgan = require('morgan');
const errorService = require('./services/error.service');
const routes = require('./constants/routes');
const movie = require('./routes/movie.route');

const app = express();

app.use(morgan('dev'));

app.use(routes.movies, movie);
app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;
