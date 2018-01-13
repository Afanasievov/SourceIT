const domain = require('domain').create();

const { Server } = require('http');
const port = 3000;
const host = 'localhost';

domain.on('error', (err) => {
  console.log('Domain');
  console.log(err);
  process.exit(1);
});

domain.run(() => {
  const server = new Server((req, res) => {
    throw new Error('Something goes wrong');
  });

  server.listen(port, host, () => {
  console.log(`Server is listening on ${host}:${port}`);
});
})
;

// const server = new Server((req, res) => {
//   throw new Error('Something goes wrong');
// });

// process.on('uncaughtException', (err) => {
//   console.log('Uncaught exception');
//   console.log(err);
//   process.exit(1);
// });

// server.listen(port, host, () => {
//   console.log(`Server is listening on ${host}:${port}`);
// });

// server.on('error', (err) => {
//   console.log('Error appears');
//   console.log(err.message);
//   process.exit(1);
// });