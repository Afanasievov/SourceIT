let count = 0;

class Singleton {
  constructor() {
    count += 1;
    this.count = count;
  }
}

module.exports = new Singleton();
