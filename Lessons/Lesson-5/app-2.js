const http = require('http');

let options = {
  keepAlive: true,
  maxSockets: 10,
};

const agent = new http.Agent(options);

options = {
  hostname: 'google.com',
  port: 80,
  path: '/',
  method: 'GET',
  agent,
};

const request = http.request(options);

request.end();

request.prependOnceListener('response', (incomingMessage) => {
  incomingMessage.on('readable', () => {
    const message = incomingMessage.read();
    console.log(message.toString());
  });
});

console.dir(agent);
