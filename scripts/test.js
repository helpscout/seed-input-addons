'use strict';

var pkg = require('../package.json');
var sass = require('node-sass');
var pathfinder = require('sass-pathfinder');

var file = pkg.name;
var includePaths = pathfinder(
  require('seed-control'),
  require('seed-input')
);

sass.render({
  file: './scss/pack/'+file+'/__index.scss',
  includePaths: includePaths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    return console.log('Success!');
  }
});
