const { EventEmitter } = require('events');

class MyOwnEventEmitter extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  convertName() {
    console.log('Old name - ', this.name);
    const oldName = this.name;
    this.name = this.name.split('').reverse().join('');
    console.log('New name - ', this.name);
    this.emit('reverse', oldName, this.name);
  }
}

const myEmitter = new MyOwnEventEmitter('Oleksandr\'s Event');

myEmitter.once('reverse', (oldName, newName) => { // fired only once
  console.log(`Name changed ${oldName} -> ${newName}`);
});

myEmitter.addListener('restart', (err, msg) => {
  console.log(`myEmitter.name - ${myEmitter.name}`);
  console.log(`${err} - ${msg}`);
});

myEmitter.emit('restart', 'Unexpected error', 'Server was restarted');

myEmitter.convertName();
console.log(myEmitter.eventNames());
console.log(myEmitter.listenerCount('restart'));
