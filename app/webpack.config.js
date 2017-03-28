const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',

  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'app.js'
  },

  devtool: 'source-map',

  resolve: {
    modules: ['client/lib', 'node_modules'],
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx-loader?insertPragma=React.DOM'
    }]
  }
};
