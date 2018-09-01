import mongoose, { Schema } from 'mongoose'

const StudentSchema = new Schema({
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
