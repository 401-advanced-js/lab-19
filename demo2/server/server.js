'use strict';

const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database');

db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');


const NQ = new Q('network');

NQ.monitorEvent('attack');
NQ.monitorEvent('no-service');