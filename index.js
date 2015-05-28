#!/usr/bin/env node
'use strict';
var fs = require('fs'), 
    path = require('path'),
    join = path.join,
    date = require('./lib/date');

module.exports = function (root, french, cb) {
    if (root === undefined || !fs.existsSync(path.normalize(root))) {
        if (typeof cb  === 'function') {
            cb('Missing path.');
            return;
        } else {
            throw new Error('Missing path.');
            return;
        }
    }
    if (french === undefined) french = false;
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
    if (typeof cb === 'function') {
        cb(false);
    }
};