import express from 'express'
import mongoose from './config/mongoose'
import { port } from './config/config'
import auth from './api/middleware/auth'
import healthRoutes from './api/routes/healthRoutes'
import songRoutes from './api/routes/songRoutes'
import cors from 'cors'
const app = express()

mongoose.connect()
app.use(express.json())
app.use(auth)
app.use(cors())
app.use('/api/v1', healthRoutes)
app.use('/api/v1', songRoutes)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
