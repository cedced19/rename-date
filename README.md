# Rename-date

Rename all your photos with the modification date.

[![Build Status](https://travis-ci.org/cedced19/rename-date.svg?branch=master)](https://travis-ci.org/cedced19/rename-date)
[![NPM version](https://badge.fury.io/js/rename-date.svg)](http://badge.fury.io/js/rename-date)

```
npm install --save rename-date
```

## Example

```js
var renameDate = require('rename-date');

renameDate(process.cwd(), false)
```

### Options

#### path

*Required*  
Type: `string`

Define the path were there are images. 

#### french patern

*Required*  
Type: `boolean`

If it is true it will be generated the file `25-05-2015-0.jpg` instead of `05-25-2015-0.jpg`.

## CLI

```bash
$ npm install -g rename-date-cli
$ rename-date
```