//add Node path module
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css'); // name of file you choose

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),  // absolute path to where to output
      filename: 'bundle.js'                  //can use any name
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,                      // $ = all files
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({           // tells webpack to extrack any of these files
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      // can provide any option in at https://webpack.js.org/configuration/dev-server/
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};