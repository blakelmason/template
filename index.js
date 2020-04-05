require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes.api.index)

start()

async function start() {
  await db.connect()
  if (process.env.NODE_ENV !== 'production') {
    await db.reset()
    await db.seed()
  }
  app.listen(PORT, () => console.log(`\nlistening on port ${PORT}`))
}
