import { mergeTypes } from 'merge-graphql-schemas'

import StydentsType from './student/typeDefs'

const types = [
  StydentsType
]

export default mergeTypes(types, { all: true })