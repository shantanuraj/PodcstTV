const path = require('path');

module.exports = () => {
  const NODE_ENV = process.env.NODE_ENV || 'production';
  return {
    mode: NODE_ENV,
    devServer: {
      contentBase: __dirname,
      compress: true,
      host: '0.0.0.0',
      port: 9001,
    },
    entry: './src/app.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};
