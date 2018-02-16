require('babel-polyfill');
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve('./', 'dist/');
var APP_DIR = path.resolve('./..', 'ReactSampleApplication');

var config = {
  cache: true,
   entry: [
     'babel-polyfill',
      APP_DIR + '/src/index.js'
   ],

  // entry: APP_DIR + '/src/index.js',

   output: {
      path: BUILD_DIR,
      publicPath: 'http://localhost:9090/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 9090
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
          { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
   }


}

module.exports = config;
