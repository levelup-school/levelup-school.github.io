'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './map/scratch/src/index.js',
  output: {
    filename: './map/scratch/jabba.js',
    path: __dirname
  },
  watch: true,

  devtool: "source-map",

  module: {}
};

module.exports = {
  mode: 'production',
  entry: './map/web/src/index.js',
  output: {
    filename: './map/web/jabba.js',
    path: __dirname
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
