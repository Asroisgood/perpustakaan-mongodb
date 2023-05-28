import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import BukuRoute from './routes/BukuRoute.js'

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/perpustakaan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected!'))

app.use(cors())
app.use(express.json())
app.use(BukuRoute)

app.listen(5000, () =>
  console.log('--- Listen to Port [5000]... Server is ready! ---')
)
