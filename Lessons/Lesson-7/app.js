const http = require('http');
const connect = require('connect');

const logger = (req, res, next) => {
  // console.log(req.url);
  console.log(`200: ${req.url} :[OK]`);
  next();
};
const greetings = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 200, message: 'Hello' }));
};
const notFound = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 404, message: 'Not found' }));
};

const app = connect();
app.use(logger);
app.use('/nick', greetings);
app.use(notFound);

http.createServer(app).listen(3000, 'localhost', () => {
  console.log('Server listen on port 3000');
});
