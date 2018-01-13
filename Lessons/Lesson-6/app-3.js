const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-type': 'application/json' });
  request.pipe(response); // pipe - Buffer
});
const port = 3000;

server.listen(port, 'localhost', () => {
  console.log('Listen server on port %s', port);
});
