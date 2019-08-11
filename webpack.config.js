const path = require('path');

module.exports = ({ mode }) => ({
  entry: './src/index.ts',
  mode,
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {

    extensions: [".ts", ".tsx", ".js"]
  },
  externals : {
    react: 'react'
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: "ts-loader" }
    ]
  }
});