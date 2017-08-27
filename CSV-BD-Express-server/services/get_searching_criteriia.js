/**
 * @param {Object} options
 * @param {Object} model
 * @returns {Object} searchingCriteria
 */
module.exports = (options, model) => {
  const searchingCriteria = Object.keys(options)
    .reduce((acc, curr) => {
      (curr in model) && (acc[curr] = model[curr]);
      return acc;
    },
    {});

  return searchingCriteria;
};
