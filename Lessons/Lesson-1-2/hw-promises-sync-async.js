const wait = () => new Promise((resolve) => {
  const myTimeout = Math.round(Math.random() * 5000); // up to 5 seconds

  setTimeout(
    () =>
      console.log('Timeout %d ms.', myTimeout)
      || resolve(myTimeout),
    myTimeout
  );
});

const promises = new Array(5).fill(wait);

// async running
promises
  .reduce((current, next) => current.then(() => next()), Promise.resolve());

// sync running
// promises
//   .forEach((promise) => promise());
