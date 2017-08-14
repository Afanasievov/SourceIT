const express = require('express');
const morgan = require('morgan');
const errorService = require('./services/error.service');
const routes = require('./constants/routes');

const app = express();

app.use(morgan('dev'));

app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;
