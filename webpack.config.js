const path = require('path')

module.exports = {
  devtool: 'cheap-source-code',
  entry: {
    jsx: path.resolve(__dirname, './src/standalone.js'),
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          extends: path.resolve(__dirname, '.babelrc'),
        },
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {},
          },
        ],
        options: {
          extends: path.resolve(__dirname, '.babelrc'),
        },
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: path.resolve('docs'),
    filename: '[name].js',
    library: 'jsx',
    libraryExport: 'jsx',
    libraryTarget: 'umd',
  },
}
