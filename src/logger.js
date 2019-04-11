'use strict';

const Q = require('@nmq/q/client');

const server = new Q('server');

server.subscribe('save', (payload) => {
  console.log('Your file got saved', payload);
})

server.subscribe('error', (payload) => {
  console.log('Shiz didnt happen right', payload);
})

console.log('current subscriptions:', server.subscriptions());
