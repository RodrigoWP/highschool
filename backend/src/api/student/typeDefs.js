const typeDefs = `
  type Student {
    id: ID!
    code: String!
    name: String!
  }
  type Query {
    Students: [Student]!
    Student(id: ID!): Student
  }
  type Mutation {
    createStudent(
      code: String!
      name: String!
    ): Student
  }
`

export default typeDefs
