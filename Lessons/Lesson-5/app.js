const http = require('http');

// Create an HTTP server
const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('cons ok');
  res.end('okay');
});

const port = 3310;
srv.listen(port, 'localhost');

// srv.on('upgrade', (req, socket, head) => {
//   socket.write('HTTP/1.1 101 Web Socket Protokol Handshake\r\n' +
//   'Upgrade: WebSockt \r\n' +
//   'Connection: Upgrade \r\n' +
//   '\r\n');

//   socket.pipe(socket); // echo back
// });
