const http = require('http');
const express = require('express');

const app = express();
const logger = (req, res, next) => {
  console.log(`${req.url} - ${req.method}`);
  next();
};

app.use(logger);
app.get('/nick', (req, res) => {
  res.status(200);
  res.json({ status: 200, message: 'This is Nick!' });
});

app.use((req, res) => {
  res.status(404);
  res.json({ status: 404, message: 'Route not found' });
});

http.createServer(app).listen(3000, 'localhost');
