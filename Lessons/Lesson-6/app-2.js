const http = require('http');

const server = http.createServer((request, response) => {  
  // 1) let reqData = '';
  // 2) let reqData = [];

  request.on('data', (chunk) => {
    // 1) reqData += chunk;
    // 2) reqData.push(chunk);
    response.write(chunk);
  });

  request.on('end', () => {
    response.write('This is a cow! \n');
    // 1) response.write(reqData);
    // 2) response.write(reqData.join(''));
    response.end('end');
  });
});
const port = 3000;

server.listen(port, 'localhost', () => {
  console.log('Listen server on port %s', port);
});
