const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'Highschool',
    template: join(paths.root, 'public', 'index.html')
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: [{
      loader: 'babel-loader'
    }]
  },

  resolve: {
    alias: {
      containers: join(paths.src, 'containers'),
      components: join(paths.src, 'components'),
      ui: join(paths.src, 'ui'),
      utils: join(paths.src, 'utils')
    }
  }
}
