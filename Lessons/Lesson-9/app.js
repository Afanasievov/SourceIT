const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorService = require('./services/error.service');

const routes = require('./constants/routes');
const index = require('./routes/index.route');


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(routes.defaultRouter, index);
app.use(errorService.notFound);
app.use(errorService.internal);

module.exports = app;
