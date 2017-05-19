'use strict';

const http = require('http');
const {PORT, upper,lower}= require('./ports');
const [a,b] = [1,2];
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1> ${upper(__dirname)} </h1>
        <h3> ${lower('HELLO WORLD')}</h3>
        <p> what a body =P </p>
      </body>
      `)
  } else {
    res.end('UNKNOWN')
  }
})
server.listen(PORT, () => console.log('Started our server'));
