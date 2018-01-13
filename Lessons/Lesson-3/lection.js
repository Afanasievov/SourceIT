// PROMISE

// Event loop
// Event queue

// async events

// setTimeout(() => {
//   console.log('Time timeout!')
// }, 0);
//
// setImmediate(() => {
//   console.log('Time immediate!')
// });
//
// process.nextTick(() => {
//   console.log('Time next tick!')
// })

// setImmediate выполниться раньше. Он устанавливается в начало очереди. Всегда самый быстрый.
// process.nextTick() - ставиться в начало потока. На следующем проходе - первый.
// setTimeout срабатывает по событию

// const setTimePeriod = (param, msg) => new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log(msg);
//     res();
//   }, param);
// })

const setTimePeriod = (param, msg) => new Promise((res, rej) => {
  if (param >= 10000) {
    rej('can\'t waiting so much'); // предусмотренное программой исключение
  }

  setTimeout(() => {
    res(msg);
  }, param);
})

// setTimePeriod(1000, 'one second is over')
//   .then( done =>
//     setTimePeriod(2000, 'two seconds is over')
//   )
//   .then( done =>
//     setTimePeriod(2500, '2.5 seconds is over')
//   )
//   .then( done => {
//     console.log('Done!')
//   })

setTimePeriod(1000, 'one second is over')
  .then( done => {
    console.log(done);
    return setTimePeriod(2000, 'two seconds is over')
  })
  .then( done => {
    console.log(done);
    return setTimePeriod(2500, '2.5 seconds is over')
  })
  // .then( done => {
  //   console.log(done);
  //   console.log('Done!');
  // })
  .then( done => {
    console.log(done);
    return setTimePeriod(11000, 'A lot of milliseconds lost!');
  })
  .catch((err) => { // если ошибки до сих пор нет, то по цепочке ищется следующий then
    console.log(err);
    return setTimePeriod(2000, 'two seconds is over');
  })
  .then(data => {
    console.log(data);
    console.log('DONE');
  })

// setTimeout(() => {
//   console.log('one second is over');
//   setTimeout(() => {
//     console.log('two seconds is over');
//     setTimeout(() => {
//       console.log('2,5 seconds is over');
//       setTimeout(() => {
//         console.log('Done')
//       },0)
//     }, 2500)
//   }, 2000)
// }, 1000)

//
// try{
//   setTimeout(() => {}, 1000);
// } catch(e) {
//   console.log(e);
// } - не срабатывает. try - catch - синхронный, его уже не будет на момент ошибки



// parallel

setTimeout(() => {
  console.log('First done');
}, 1000);
setTimeout(() => {
  console.log('Second done');
}, 2000);
setTimeout(() => {
  console.log('Third done');
}, 1500);


const wait = (ms) => new Promise((resolve, reject) => {
    if(ms > 2000) {
      return reject('error');
      // return;
    }

    setTimeout(() => {
      return resolve(ms);
      // return;
    }, ms)
  });


// race execution

Promise.race([
  wait(2000),
  wait(1000),
  wait(5000)
])
.then(data => console.log(data)); // wait(100)


// Resolve, reject
Promise.resolve();

Promise.reject();

const wait = (ms) => new Promise((resolve, reject) => {
    if(ms > 2000) {
      return reject('error');
      // return;
    }

    setTimeout(() => {
      return resolve(ms);
      // return;
    }, ms)
  });

Promise
  .resolve('Some data')
  .then(data => console.log(data));

Promise // применяем, когда хотим протестить цепочку промисов
  .reject('Error')
  .catch(e => console.log(e));
