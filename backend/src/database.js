import mongoose from 'mongoose'
import mongoConfig from '../config/db.config'

export const connectDatabase = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = Promise

    const { uri, options } = mongoConfig
    mongoose
      .connect(uri, options)
      .then(resolve)
      .catch(reject)
  })
}
