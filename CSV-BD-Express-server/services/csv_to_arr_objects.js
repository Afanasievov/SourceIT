const patterns = require('../constants/patterns');

/**
 * @param {Stirng} string - csv string
 * @returns {Array} - array of objects
 */
module.exports = (string) => {
  const comaRegex = /(?!\B"[^"]*),(?![^"]*"\B)/; // find comma not inside quotes

  let [fieldNames, ...values] = string.split(patterns.lineBreak);

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
