#!/usr/bin/env node
'use strict';
var fs = require('fs'), 
    join = require('path').join, 
    date = require('./lib/date');

module.exports = function (root, french) {
  if (french == undefined) french = false;
  if (root == undefined) {
      console.log('\x1B[31m Please define a path. \x1B[91m');
      process.exit(1);
  }
  date.reset();
  var result = [];
  var queue = ['/'];
  while (queue.length) {
    var d = queue.shift();
    fs.readdirSync(join(root, d)).sort().forEach(function (entry) {
      var f = join(root, d, entry);
      var stat = fs.statSync(f);
      if (stat.isDirectory() && entry != 'node_modules') {
        queue.push(join(d, entry));
      } else {
        if (/.png/i.test(entry)) {
          var filename = date(stat.mtime, french) + '.png';
          fs.renameSync(f, join(root, d, filename));
        } else if (/.jpg/i.test(entry)) {
          var filename = date(stat.mtime, french) + '.jpg';
          fs.renameSync(f, join(root, d, filename));
        }
      }
    });
  }
};