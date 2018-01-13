const { EventEmitter } = require('events');

const vacation = new EventEmitter();
const hardWork = new EventEmitter();

const vacationEvent = (longevity, msg) => {
  console.log(`I'm on vacation for ${longevity} days.`);
  console.log(msg);
  hardWork.emit('start');
};
const vacationTrash = () => {
  console.log('I\'m drinking my last working day!');
};
const beginWork = () => {
  console.log('Who! I\'m on my lovely work again!');
};

vacation.on('start', vacationEvent);
vacation.on('start', vacationTrash);
hardWork.on('start', beginWork);

setTimeout(() => {
  console.log('Working!');
  vacation.emit('start', 100, 'Good bye pals!');
}, 2000);

vacation.emit('start', 100, 'Good bye loosers!');

// vacation.removeListener('start', vacationEvent);
// vacation.removeAllListeners('start');