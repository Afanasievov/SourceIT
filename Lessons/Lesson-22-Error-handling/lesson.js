// all errors in stdOut -> than handling

try {
  const myFileContent = fs.readFileSync('./fileNeverExists.txt');
} catch (err) {
  console.error(`Logging: ${err}`); // Logging
  console.error(`Tracking: ${err}`); // Tracking
}

// try-catch - always sync
// async err isn't caught

// a good way is using Promises
// .catch((err))

// for async-await try-catch works!!!


// Listeners
server.on('error', (err) => {
  console.error(`Logging: ${err}`); // Logging
  console.error(`Tracking: ${err}`); // Tracking
  process.exit(1);
});


// critical occasions
process.on('uncaughtException', (err) => {
  console.error(`Logging: ${err}`); // Logging
  console.error(`Tracking: ${err}`); // Tracking
  process.exit(1);
});


// Domain - handling of async errors