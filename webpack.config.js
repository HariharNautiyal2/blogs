// webpack.config.js

module.exports = {
    // Other webpack configurations...
    module: {
      rules: [
        // Add a rule for handling .node files
        {
          test: /\.node$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    }
  };
  