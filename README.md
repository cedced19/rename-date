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

renameDate(process.cwd(), false, function(err) {
    if (!err) {
     console.log('Done');
    }
});
```

### Options

#### path

*Required*    
Type: `string`

Define the path were there are images. 


#### french patern

Type: `boolean`  
Default: `false`

If it is true it will be generated the file `25-05-2015-0.jpg` instead of `05-25-2015-0.jpg`.

#### callback

Type: `function`


## CLI

```bash
$ npm install -g rename-date-cli
$ rename-date
```

## Desktop

1. [Download for Windows](https://raw.githubusercontent.com/cedced19/rename-date/master/desktop/dist/Windows.zip)
2. Extract
3. Execute `rename-date.exe`

## Special thanks

Because we don't say it enough: thanks you all my friends to help me (by ideas or moral support) to create all software I make everyday.