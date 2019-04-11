'use strict';

const io = require('socket.io')(3333);

io.on('connection', (socket) => {
  console.log('socket', socket.id);

  socket.on('speak', (payload) => {
    socket.broadcast.emit('message', payload);
  });
});