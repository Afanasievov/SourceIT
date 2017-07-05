const http = require('http');
const port = 3310;
const getWeather = require('./get_weather');

const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('Request.');
  res.end();
});

srv.on('request', (req, res) => {
  if (req.url !== '/favicon.ico') {
    return getWeather(req, res);
  }
});

srv.listen(port, 'localhost', () => {
  console.log('Server listen on port %s.', port);
});
