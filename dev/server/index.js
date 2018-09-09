import http from 'http'
import url from 'url'
import path from 'path'
import express from 'express'
import config from './config/config'

// Constants
const app = express()

// App setup
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Routes
app.get('/', (request, response) => {
  response.send('Hello Richardo!')
})

app.listen(config.server.port)