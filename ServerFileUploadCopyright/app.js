const fs = require('fs');
const http = require('http');

const port = 3000;

http.createServer((request, response) => {
  const writeableStream = fs.createWriteStream('./uploaded.html');

  request.pipe(writeableStream);

  request.on('data', (chunk) => {
    response.write(chunk.toString().replace('<body>', '<body>\n\n<h4>Copyright</h4>\n\n'));
  });

  request.on('end', () => response.end());
})
  .listen(3000, () => console.log(`Server is listening on port ${port}.`));
