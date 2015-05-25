#!/usr/bin/env node
'use strict';
var program = require('commander'), 
    pkg = require('./package.json');

program.version(pkg.version)
    .option('-c, --check', 'check if there are an update')
    .option('-f, --french', 'give the date in french date template')
    .parse(process.argv);

if (program.check) {
  require('check-update')({ packageName: pkg.name, packageVersion: pkg.version, isCLI: true}, function (err, latestVersion, defaultMessage) {
    if (!err) {
      console.log(defaultMessage);
    }
  });
}

var time = -new Date().getTime();
require('./lib/rename')(process.cwd(), program.french);
time += new Date().getTime();
if (time > 1000) {
  console.log('\x1B[32mDone ! It took: ' + time.toString() / 1000 + ' secondes.\x1B[39m');
} else {
  console.log('\x1B[32mDone ! It took: ' + time.toString() + ' millisecondes.\x1B[39m');
}