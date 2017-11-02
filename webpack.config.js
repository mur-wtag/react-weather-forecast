let config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = config;
