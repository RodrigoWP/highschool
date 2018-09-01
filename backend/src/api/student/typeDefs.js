const typeDefs = `
  type Student {
    id: ID!
    code: String!
    name: String!
  }
  type Query {
    students: [Student]!
    student(id: ID!): Student
  }
  type Mutation {
    createStudent(
      code: String!
      name: String!
    ): Student
  }
`

export default typeDefs
