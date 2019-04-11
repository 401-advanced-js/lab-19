'use strict';

const Q = require('@nmq/q/server');
Q.start();

const server = new Q('server');

server.monitorEvent('save');
server.monitorEvent('error');