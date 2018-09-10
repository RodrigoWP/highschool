const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist'),
  grommentPath: join(__dirname, '..', 'node_modules')
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

  grommetLoader: {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader', options: {
          includePaths: [
            './node_modules'
          ]
        }
      }
    ]
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
