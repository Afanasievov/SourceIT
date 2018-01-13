const net = require('net');

const server = net.createServer((res) => {
  console.log('Connecting...');
  console.log(res);
  res.write('Hello\r\n');
  // res.pipe(res);
  res.end();
});

const port = 3310;
server.listen(port, 'localhost', () => {
  console.log(`Server listen on port ${port}`);
});
