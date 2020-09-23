import express, { Express } from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const { DB_URL, DB_PORT, DB_USER, DB_PASS, DB_NAME, SERVER_PORT } = process.env

const app: Express = express()
app.use(express.json())
app.use(routes)

const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_URL}:${DB_PORT}/${DB_NAME}`

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(SERVER_PORT, () =>
      console.log(`Server running on port ${SERVER_PORT}`),
    ),
  )
