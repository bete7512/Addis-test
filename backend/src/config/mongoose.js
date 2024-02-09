
import mongoose from 'mongoose'
import { mongoURI } from './config'

mongoose.Promise = global.Promise

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`)
    process.exit(-1)
})

/**
 * Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
    try {
        mongoose.connect(mongoURI)
        console.log('MongoDB Connected')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
    return mongoose.connection
}
