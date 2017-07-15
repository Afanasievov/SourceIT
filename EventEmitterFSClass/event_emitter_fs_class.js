const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const path = require('path');

const encoding = 'utf8';

class FSClass extends EventEmitter {
  constructor() {
    super();
  }

  readFile(filename) {
    console.log(`--- Reading of ${filename} ---`, filename);

    fs.readFile(path.join(__dirname, filename), encoding, (err, data) => {
      if (err) {
        conosle.log('--- Reading fail ---\n', err);
      }
      console.log('--- Reading is succesful ---');

      this.emit('readingDone', filename, data);
    });
  }

  writeFile(filename, data) {
    console.log(`--- Writing of ${filename} ---`);

    fs.writeFile(path.join(__dirname, filename), data, encoding, (err) => {
      if (err) {
        console.log('--- Writing fail ---\n', err);
      }

      this.emit('writingDone', filename);
    });
  }
}

const fsEmmitter = new FSClass();

fsEmmitter.on('readingDone', (filename, content) => {
  console.log(`Content of ${filename}:\n${content}`);
});
fsEmmitter.on('writingDone', (filename) => fsEmmitter.readFile(filename));

fsEmmitter.readFile('lorem.txt');
fsEmmitter.writeFile('newFile', 'some important data\n'.repeat(1e1));