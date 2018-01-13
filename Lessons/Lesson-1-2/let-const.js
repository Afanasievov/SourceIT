let main = 1;
let notMain = 2;
let example = 'str';

// console.log(myConst); Temporal dead zone

const myConst = {
  x: 5,
  y: 6
};

myConst.x = 7;
myConst.z = 8;

main = 2;

// Inheritance

class Vehicle {
  constructor() { // never contains logic
    this.wheels = 4;
    this.__wheels__ = 4;
    this.__carName__ = 'gnu';
  }

  // logic is in methods
  getWheelsCount() {
    return this.wheels;
  }

  go() {
    console.log('GO!');
  }

  // get set

  get wheelsCount() {
    return this.wheels;
  }

  get carName() {
    return this.__carName__;
  }

  set wheelsCount(value) {
    console.log('Wheels value was changed');
    this.__wheels__ = value;
  }

  set carName(value) {
    return this.__carName__ = value;
  }
}

class Car extends Vehicle {
  static color() {
    return 'RED';
  }

  constructor(fuel) {
    super(); // necessary ---> this is not defined
    this.__fuel__ = fuel;

    // do not use return something
    // super must return instance of constructor
    // true: (return this) or (do not return)
  }

  go() {
    // this.color(); // error
    console.log(Car.color()); // work for Class
    console.log('Trrrrr');
    super.go();
  }
}

const car = new Car();
// console.log(car.carName);
car.carName = 'new';
// console.log(car.carName);
car.go();