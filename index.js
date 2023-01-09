
//Importer la bibliothèque Express 
const express = require('express');
//Express initializes app to be a function handler that you can supply to an HTTP server
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// Getting the path request and sending the response 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});


