'use strict';
const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const Q = require('@nmq/q/client');

const loadFile = (file) => readFile(file);
const saveFile = (file,buffer) => writeFile(file,buffer);
const convertBuffer = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());


const alterFile = (file) => {
  loadFile(file)
    .then( buffer => convertBuffer(buffer))
    .then( buffer => saveFile(file,buffer) )
    .then( success => Q.publish('server', 'save', 'It works dood'))
    .catch(error => Q.publish('server', 'error', error));
};
module.exports = {loadFile,saveFile,convertBuffer,alterFile};