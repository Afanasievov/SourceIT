const express = require('express');
const http = require('http');
const router = require('./router');

const app = express();

app.use((req, res, next) => {
  console.log('hello');
  next();
})
app.use('/ii', router);

http.createServer(app).listen(3000, 'localhost');
