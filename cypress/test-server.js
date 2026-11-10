const fs = require('fs');
const http = require('http');
const path = require('path');

const form = fs.readFileSync(path.join(__dirname, 'fixtures', 'form.html'));
const server = http.createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('ok');
    return;
  }

  if (request.url === '/' || request.url === '/pesquisa/' || request.url === '/pesquisa') {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.end(form);
    return;
  }

  response.writeHead(404);
  response.end('Not found');
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Local survey available at http://127.0.0.1:8080');
});
