// chain-off responsibility

class Chain {
  constructor() {
    this.counter = 0;
  }

  // plusThree() {
  //   this.counter += 3;
  //   return this;
  // }
  // plusFour() {
  //   this.counter += 4;
  //   return this;
  // }

  addMethod(name, method) {
    if (typeof method === 'function') {
      this[name] = method;
    }
  }
}


const chain = new Chain();

chain.addMethod('plusThree', function () {
  this.counter += 3;
  return this;
});
chain.addMethod('plusFour', function () {
  this.counter += 4;
  return this;
});

const a = chain.plusThree().plusThree().plusFour().counter;

console.log(a);
