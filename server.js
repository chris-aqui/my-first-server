const http = require('http');

const server = http.createServer( (request, responce) => {
  // console.log('I hear you!. Thanks for the request');
  responce.setHeader('Content-Type', 'text/html');
  responce.end('<h1>Hellooo</h1>')

});

server.listen(3000);
