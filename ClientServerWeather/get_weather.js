const https = require('https');

module.exports = (req, res) => {
  const hostWeather = 'api.forecast.io';
  const pathWeather = `/forecast/2cdc91e6ecd2224868d69675c6b88b0d/49.9935,36.2304?units=si`;

  let options = {
    keepAlive: true,
    maxSockets: 10,
  };

  const agent = new https.Agent(options);

  options = {
    hostname: hostWeather,
    path: pathWeather,
    method: 'GET',
    agent
  };

  const request = https.request(options, (response) => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data = data.concat(chunk);
    });

    response.on('end', () => {
      console.log('Current weather for Kharkiv:\n', JSON.parse(data).currently);
    });
  });

  request.on('error', (err) => {
    console.error(`Problem with request: ${err}`);
  });

  request.end();
}
