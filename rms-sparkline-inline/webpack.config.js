const path = require('path');

module.exports = {
  entry: './src/rms-sparkline-inline.ts',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'rms-sparkline-inline.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
