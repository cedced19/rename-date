#!/usr/bin/env node
'use strict';
var array = {};
var day = function (t) {
  if (t.getDate() < 10) {
    return '0' + t.getDate().toString();
  }
  return t.getDate();
};
var month = function (t) {
  if (t.getMonth() < 9) {
    return '0' + (t.getMonth() + 1).toString();
  }
  return t.getMonth() + 1;
};
var checker = function (value) {
  for (var x in array) {
    if (x == value) {
      return true;
    }
  }
  return false;
};

module.exports = function (time, french) {
  if (french) {
    var name = day(time) + '-' + month(time) + '-' + time.getFullYear() + '-';
    if (checker(name)) {
      array[name]++;
      name = name + array[name];
    } else {
      array[name] = 0;
      name = name + 0;
    }
    return name;
  }
  var name = month(time) + '-' + day(time) + '-' + time.getFullYear() + '-';
  if (checker(name)) {
    array[name]++;
    name = name + array[name];
  } else {
    array[name] = 0;
    name = name + 0;
  }
  return name;
};