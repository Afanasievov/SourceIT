// es6

// Mistakes
// 1 - no use strict
// 2 - no var
// 3 - no function expression (temporal dead zone)
// 4 - use OOP but no functions
// 5 - use `${}`
// 6 - iterator - we need to run through a collection
//   - array - we need use indexes
// 7 - use Set and Map



// ********** iterator

// {
//   next() {
//     return {
//       this.currentValue,
//       done
//     }
//   }
// }

class IteratorConstructor {
  constructor(obj) {
    this.obj = obj;
    this.position = 0;
  }

  isDone() {
    return this.position + 1 > Object.keys(this.obj).length;
  }

  next() {
    const keys = Object.keys(this.obj);
    const output = { done: this.isDone() };

    output.value = this.position >= keys.length
      ? undefined
      : this.obj[keys[this.position]];

    this.position += 1;
    return output;
  }
}

const obj = {
  foo: 3,
  bar: 'str',
  pref: {},
};
const iterableInstance = new IteratorConstructor(obj);

console.log(iterableInstance.next());
console.log(iterableInstance.next());
console.log(iterableInstance.next());
console.log(iterableInstance.next());
console.log(iterableInstance.next());
