const patterns = require('../constants/patterns');

/**
 * @param {Object[]} arr - array of objects
 * @retunr {String} - string for csv-file
 */
module.exports = arr => new Promise((resolve) => {
  let csvString = Object.keys(arr[0].toObject()).join(patterns.coma) + patterns.lineBreak;

  arr.forEach((model) => {
    Object.keys(model.toObject()) // add lines of values
      .forEach((key, i, array) => {
        csvString += model[key];
        csvString += (i === array.length - 1) ? patterns.lineBreak : patterns.comma;
      });

    if (arr.indexOf(model) === arr.length - 1) {
      csvString = csvString.trim();
      return resolve(csvString);
    }
  });
});
