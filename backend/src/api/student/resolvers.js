import Students from './schema'

const resolvers = {
  Query: {
    students: () => Students.find(),
    student: (root, { id }) => Students.findById(id)
  },

  Mutation: {
    createStudent: async (root, args) => {
      const { code, name } = args

      const studentExists = await Students.findOne({ code })
      if (studentExists) {
        studentExists.code = code
        studentExists.name = name

        studentExists.save()

        return studentExists
      } else {
        const newStudent = new Students({
          code,
          name
        })

        newStudent.save()

        return newStudent
      }
    }
  }
}

export default resolvers