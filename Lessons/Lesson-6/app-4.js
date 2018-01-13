const fs = require('fs');
// let fileContent = fs.readFileSync('./main.txt'); // DO NOT USE IT!!!

// let fileContent = fs.readFile('./main.txt', (err, data) => {
//   console.log(data); // Buffer
// });

const fileContentStream = fs.createReadStream('./main.txt');
let i = 0;

fileContentStream.on('data', (chunk) => {
  i += 1;
  console.log(chunk.toString('utf8'));
});

fileContentStream.on('end', () => {
  console.log('This is the end!');
});

const writableStream = fs.createWriteStream('./main.copy.txt');

fileContentStream.pipe(writableStream);
