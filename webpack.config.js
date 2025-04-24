const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader', // создаёт style-nodes из JS-строк
          'css-loader',   // переводит CSS в CommonJS
          'sass-loader'   // компилирует Sass в CSS
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.svg']
  },
  mode: 'development'  // или 'production'
};