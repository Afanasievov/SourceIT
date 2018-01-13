const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  const newFile = fs.createReadStream('readme_copy.md');
  request.pipe(newFile);

  request.on('end', () => {
    response.end('uploaded!');
  });
}).listen(8080);
