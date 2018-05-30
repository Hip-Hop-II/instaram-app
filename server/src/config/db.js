import mongoose from 'mongoose'
import constans from './constans'

mongoose.Promise = global.Promise
mongoose.set('debug', true)

try {
  mongoose.connect(constans.DB_URL)
} catch (error) {
  mongoose.createConnection(constans.DB_URL)
}
mongoose.connection
  .once('open', () => {
    console.log(`Mongodb running`)
  }).on('error', (error) => {
    throw error
  })
