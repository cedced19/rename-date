'use strict';
var fs = require('fs'),
    renameDate = require('./');

describe('renameDate', function () {
    
  it('should rename image with french patern', function () {
    fs.writeFileSync('test.png', '');
    renameDate('./', true);
  });
  
  it('should rename images with english patern', function () {
    fs.writeFileSync('test.png', '');
    renameDate('./', false)
  });
    
});