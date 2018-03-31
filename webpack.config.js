const path = require('path');

module.exports = {
  entry: './client/component/AppView.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'app-bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
