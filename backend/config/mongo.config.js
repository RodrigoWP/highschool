const enviroment = process.env.NODE_ENV

const configs = {
  'production': {
    uri: '',
    options: {}
  },
  'development': {
    uri: 'mongodb://highschool:Qweiop123@ds141812.mlab.com:41812/highschool-dev',
    options: {}
  }
}

export default configs[enviroment]
