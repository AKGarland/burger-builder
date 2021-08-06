const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '/[name].[ext]'
          }
        }]
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/assets/images", to: "images" },
        { from: "src/assets/css", to: "" }
      ]
    })
  ]
};