import { ApolloServer } from 'apollo-server'

import serverConfig from '../config/server.config'
import typeDefs from '../src/api/typeDefs'
import resolvers from '../src/api/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

export const createServer = () => {
  server.listen({ port: serverConfig.port })
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
}
