'use strict';

let path = require('path');



module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: './jabba.js',
    path: __dirname
  },
  watch: true,

  devtool: false,

  module: {}
};