'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3333');
const faker = require('faker');


setInterval(() => {
  socket.emit('speak', faker.hacker.phrase());
}, 750);