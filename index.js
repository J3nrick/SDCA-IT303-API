import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { userRoutes } from './routes/user.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users' , userRoutes)


mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once('open', () => console.log('Now connected to MongDB Atlas,'))

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000.')
})