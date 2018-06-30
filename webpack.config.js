const path = require('path');

module.exports = {
  entry: {
    client: path.resolve(__dirname, './client/app.jsx'),
    server: path.resolve(__dirname, './client/components/SheetView.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
