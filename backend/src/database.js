import mongoose from 'mongoose'
import { URI_DATABASE } from '../settings'

export const connectDatabase = () => {
  return new Promise((resolve, reject) => {
    mongoose.Promise = Promise

    mongoose.connect(URI_DATABASE, {
        useNewUrlParser: true
      })
      .then(resolve)
      .catch(reject)
  })
}
