import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import serverConfig from '../../config/server.config'
import typeDefs from '../../src/api/typeDefs'
import resolvers from '../../src/api/resolvers'

const app = express()
const PORT = serverConfig.port
const ENV = process.env.NODE_ENV

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use(cors({ origin: '*' }))
app.get('/', (req, res) => res.json({ code: 200, message: 'OK' }))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

const enableGraphiQL = serverConfig.playground && true
enableGraphiQL && app.use(serverConfig.playground, graphiqlExpress({ endpointURL: '/graphql' }))

export default () => {
  return app.listen(PORT, () => {
    ENV === 'development' && console.log(`Running on port ${PORT}.`)
  })
}