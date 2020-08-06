import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (request, response: any) => {
  return response.json({ message: 'Hello world' })
})

app.listen(process.env.PORT)
