import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true
  },

  name: {
    type: String,
    required: true
  }
})

export default mongoose.model('Students', StudentSchema)
