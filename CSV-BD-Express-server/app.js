const express = require('express');
const morgan = require('morgan');
const myBodyParser = require('./middlewars/myBodyParser');
const errorService = require('./services/error.service');
const routes = require('./constants/routes');
const movie = require('./routes/movie.route');
const movieFile = require('./routes/movie_file.route');

const app = express();

app.use(morgan('dev'));

app.use(myBodyParser);

app.use(routes.movie, movie);
app.use(`${routes.movie}${routes.file}`, movieFile);
app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;
