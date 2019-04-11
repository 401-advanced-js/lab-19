'use strict';

let functions = require('../src/files.js')

describe('The app', () => {

  it('Read file function can load a file', () => {
    return functions.loadFile('../files/test.txt')
      .then( buffer => {
        expect(Buffer.isBuffer(buffer)).toBeTruthy();
      })
  })

  it('Can write to a file', () => {
    return functions.writeFile('../files/test.txt', 'howdr')
    .then( success => {
      expect(success).toBeUndefined();
    })
    .catch(error =>{
      expect(error).toBeUndefined();
    })
  })

})