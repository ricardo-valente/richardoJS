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
app.set('view engine', 'pug')
app.set('views', config.dir('views').path)
app.use('/static', express.static(config.dir('static').path))

// Routes
app.get('/', (request, response) => {
  response.render(
    path.join(config.dir('views').path, 'index.pug'),
    config)
})

app.listen(config.server.port)
console.log(`${config.app.title} running on ${config.app.url}!`)