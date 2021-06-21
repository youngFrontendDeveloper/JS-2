'use strict';

// const http = require('http');
// const static = require('node-static');

// const fileServer = new static.Server('.');
// http.createServer((req, res) => {
//   file.serve(req, res);
// }).listen(3000);

// http.createServer(function (request, response) {
//   request.addListener('end', function () {
//     fileServer.serve(request, response, function (e, res) {
//       if (e && (e.status === 404)) { // If the file wasn't found 
//         fileServer.serveFile('/not-found.html', 404, {}, request, response);
//       }
//     });
//   }).resume();
// }).listen(3000);

// const fs = require('fs');
// fs.readFile('./data.json', 'utf-8', (err, data) => {
//   if (!err) {
//     const obj = JSON.parse(data);
//     obj.third = 'THREE';

//     fs.writeFile('./data.json', JSON.stringify(obj), (err) => {

//     });
//   }
// });

// const http = require('http');
// const express = require('express');
// const app = express();
// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.write('Welcome to server!');
//     res.end();
//   }
// });

// server.on('connection', (socket) => {
//   console.log('success connect');
// });

// server.listen(3000);



const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log('server success run');
});