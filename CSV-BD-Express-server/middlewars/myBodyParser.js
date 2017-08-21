module.exports = (req, res, next) => {
  const body = [];

  req.on('data', chunk => chunk && body.push(chunk));

  req.on('end', () => {
    req.body = body.length ? JSON.parse(body.join('')) : null;
    return next();
  });
};
