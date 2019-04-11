'use strict';

const Q = require('@nmq/q/client');


setInterval( () => {
  Q.publish('database', 'create', {id:10});
  Q.publish('database', 'udpate', {id:10, name:'Domboo'});
  Q.publish('database', 'delete', {id:10, name:'Howdiest'});
  
  Q.publish('network', 'attack', {id:10, name:'Domboo'});
  Q.publish('network', 'no-service', {id:10, name:'Howdiest'});
}, 3000);