require('dotenv').config()
import path from 'path'
import fs from 'fs'

module.exports.server = {
  host: 'localhost',
  port: process.env.PORT
}

module.exports.app = {
  env: process.env.ENV,
  version: process.env.npm_package_version,
  name: process.env.npm_package_name,
  title: process.env.npm_package_title,
  auhtor: process.env.npm_package_auhtor,
  description: process.env.npm_package_description,
  url: process.env.APP_URL
}

module.exports.dir = (dirPath, dir = 'app') => {
  const mainDir = (dir === 'dev') ? '../dev' : '../app'
  return {
    path : path.join(__dirname, `../${mainDir}/${dirPath}`),
    url: `${app.url}/../${dirPath}`
  }
}