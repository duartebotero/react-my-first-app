module.export = {
  entry: "./app/js/main.js",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          preset: ['react', 'es2015']
        }
      }
    ]
  }
}
