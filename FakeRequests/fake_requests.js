const result = [];
const maxSecondsDelay = 3;
const getRandomDelay = () => (Math.floor(Math.random() * maxSecondsDelay) + 1) * 1000;
const fake = (url, cb) =>
    new Promise(resolve => setTimeout(() => resolve(cb(url)), getRandomDelay()));
const collect = msg => result.push(msg);

/* 
  Parallel run
 */
// fake('google', collect);
// fake('yandex', collect);
// fake('bing', collect);
// fake(null, () => console.log(result));

// Promise.all([
//     fake('google', collect),
//     fake('yandex', collect),
//     fake('bing', collect),
//     fake(null, () => console.log(result)),
// ]);


/*
  Series run
*/

// fake('google', collect)
//     .then(() => fake('yandex', collect))
//     .then(() => fake('bing', collect))
//     .then(() => console.log('result', result));

fake('google', (msg) => {
    collect(msg);
    fake('yandex', (msg1) => {
        collect(msg1);
        fake('bing', (msg2) => {
            collect(msg2);
            console.log(result);
        });
    });
});
