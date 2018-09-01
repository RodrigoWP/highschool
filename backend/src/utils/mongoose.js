import mongoose from 'mongoose'
import mongoConfig from '../../config/mongo.config'

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = Promise

    const { uri, options } = mongoConfig
    mongoose
      .connect(uri, options)
      .then(resolve)
      .catch(reject)
  })
}

export { connect }
