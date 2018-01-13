// setTimeout(() => {
//   let calls = 0;
//   console.log('First call');
//   calls += 1;
//   setTimeout(() => {
//     calls += 1;
//     console.log('Second call');
//     setTimeout(() => console.log('Third call.\nCalls %d', ++calls), 3000)
//   }, 2000);
// }, 1000);

const wait = (ms, mes) => new Promise((resolve) =>
  setTimeout(() => {
    console.log(mes);

    resolve(console.log('DONE'));
  }, ms)
);

wait(1000, 'First call')
  .then(() => wait(2000, 'Second call'))
  .then(() => wait(3000, 'Third call'));
//
// const wait = (ms, message) => new Promise((resolve, reject) =>
//   setTimeout(() => {
//     console.log(message);
//     resolve('DONE');
//   }, ms));
//
// wait(1000, 'the first')
//   .then(() => wait(2000, 'the second'))
//   .then(() => wait(3000, 'the third'));

// const acc = (num) = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(num);
//     resolve(num);
//   }, ms)
// });
//
// acc(2, 1000).then(() => true);


// написать 2 скрипта
// 1) 6 таймаутов в параллель с задержкой (Math.random) в конце - вывод результата
// 2) то же самое последовательно