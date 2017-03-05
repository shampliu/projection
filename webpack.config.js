'use strict'; // 'let' statements not allowed outside of strict mode

// bundles CSS into separate file
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react']}},
      {test: /\.scss$/, loaders: ExtractTextPlugin.extract('css-loader!sass-loader')}
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
};
