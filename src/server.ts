import express from 'express'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorHandler'
import { connectDb } from './config/dbConnection'
dotenv.config()

connectDb()
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use('/api/successions/', require('./routes/successionRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log('listening to port ', port)
})
