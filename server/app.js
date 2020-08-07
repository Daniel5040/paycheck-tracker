import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import routes from './routes/index'
import { verifyToken } from './middleware/validate-token'

// Establish connection with mongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
const db = mongoose.connection
db.on('error', () => {
  console.log('>error occurred trying to connect to the database')
})
db.once('open', () => {
  console.log('>successfully connected to database')
})

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/user', routes.userRoutes)
app.use('/api/workday', verifyToken, routes.workDayRoutes)
app.use('/api/paycheck', verifyToken, routes.paycheckRoutes)

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Handle Single Page Application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`>Server started on port ${port}`))
