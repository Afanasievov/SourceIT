const parseCSV = (string) => {
  const comaRegex = /(?!\B"[^"]*),(?![^"]*"\B)/; // find comma not inside quotes

  let [fieldNames, ...values] = string.split('\n');

  fieldNames = fieldNames.split(comaRegex);
  values = values
    .filter(value => value) // filter empty lines
    .map(value => value.split(comaRegex));

  const entries = values.map((value) => { // map keys-values
    const entry = {};
    value.forEach((val, ind) => {
      entry[fieldNames[ind]] = val;
    });

    return entry;
  });

  return entries;
};

const parseBuffer = (buffer) => {
  let body;

  if (buffer.length) {
    body = buffer.toString();

    try {
      body = JSON.parse(body);
    } catch (err) { // invalid json. Parse as csv
      body = parseCSV(body);
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
