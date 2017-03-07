module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'build/dev.worldwriter.js',
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      }
    ]
  }
}
