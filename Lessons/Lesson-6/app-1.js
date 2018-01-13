const http = require('http');

const server = http.createServer((request, response) => {
  request.on('data', (chunk) => {
    console.log(chunk.toString()); // POST - chunk = Buffer
  });

  request.on('end', () => {
    console.log('This is the end!');
  });

  // response - writeable stream

  // response.setHeader('content-type', 'application/json');
  response.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
  response.write('Hello people! \n');
  response.write('Hello again! \n');

  // const finish = response.eventNames()[0];
  // console.log(response.eventNames());

  // console.log(response.listeners(finish));
  // response.emit('finish', 'Bye!!!');
  // response.on('finish', () => {
  //   response.write('Hello from callback!');
  //   response.end('END');
  // });
  // response.emit('finish');
  response.end('Good Bye! \n'); // trigger event on('end')
});
const port = 3000;

server.listen(port, 'localhost', () => {
  console.log('Listen server on port %s', port);
});
