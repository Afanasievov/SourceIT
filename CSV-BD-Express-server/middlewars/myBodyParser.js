const csvToArrayObjects = require('../services/csv_to_arr_objects');

const parseBuffer = (buffer) => {
  let body;

  if (buffer.length) {
    body = buffer.toString();

    try {
      body = JSON.parse(body);
    } catch (err) { // invalid json. Parse as csv
      body = csvToArrayObjects(body);
    }
  }

  return body;
};

module.exports = (req, res, next) => {
  const buffer = [];

  req.on('data', chunk => chunk && buffer.push(chunk));

  req.on('end', () => {
    req.body = parseBuffer(buffer);
    return next();
  });
};
