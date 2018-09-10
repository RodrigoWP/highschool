import mongoose from 'mongoose'

const AttendanceSchema = new mongoose.Schema({
  date: {
    type: Date
  }
})

export default mongoose.model('Attendances', AttendanceSchema)
