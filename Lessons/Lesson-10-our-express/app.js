const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, 'OK', { 'Content-Type': 'application/json' });

  req.on('data', (chunk) => {
    const goodBuffer = res.write(chunk);
    if (!goodBuffer) {
      req.pause();
    }
  });
  res.on('drain', () => {
    req.resume();
  });
  req.on('end', () => {
    res.end();
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Server listen on port 3000');
});
