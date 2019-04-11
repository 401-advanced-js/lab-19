'use strict';

const Q = require('@nmq/q/client');

const NQ = new Q('network');


NQ.subscribe('attack', (p) => {console.log('You have been attacked', p);});
