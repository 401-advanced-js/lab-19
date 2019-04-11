'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');

db.subscribe('create', (payload) => {
  console.log('made a thing', payload);
})

db.subscribe('delete', (payload) => {
  console.log('deleted stuff', payload);
})

console.log('current subscriptions:', db.subscriptions());
