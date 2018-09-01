const enviroment = process.env.NODE_ENV

const configs = {
  'production': {
    uri: '',
    options: {}
  },
  'development': {
    uri: 'mongodb://admin:qweiop123@ds141812.mlab.com:41812/highschool-dev',
    options: {
      useNewUrlParser: true
    }
  }
}

export default configs[enviroment]
