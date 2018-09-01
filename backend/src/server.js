import { ApolloServer } from 'apollo-server'

import { SERVER_PORT } from '../settings'

import typeDefs from '../src/api/typeDefs'
import resolvers from '../src/api/resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

export const createServer = () => {
  server.listen({ port: SERVER_PORT })
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
}
