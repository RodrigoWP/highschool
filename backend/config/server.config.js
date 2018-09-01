const enviroment = process.env.NODE_ENV
const port = process.env.PORT || 5000

const configs = {
  'production': {
    port,
    playground: '/graphiql',
    cors: {
      origin: '',
      methods: ['GET', 'POST']
    }
  },
  'development': {
    port,
    playground: '/graphiql',
    cors: {
      origin: true,
      methods: ['GET', 'POST']
    }
  }
}

export default configs[enviroment]
