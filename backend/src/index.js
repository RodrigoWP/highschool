import createServer from './utils/create-server'
import * as mongo from './utils/mongoose'

mongo.connect()
export default createServer()
