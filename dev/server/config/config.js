require('dotenv').config()
import path from 'path'
import fs from 'fs'

const server = {
  host: 'localhost',
  port: process.env.PORT
}

 const app = {
  env: process.env.ENV,
  version: process.env.npm_package_version,
  name: process.env.npm_package_name,
  title: process.env.npm_package_title,
  auhtor: process.env.npm_package_auhtor,
  description: process.env.npm_package_description,
  url: process.env.APP_URL
}

const dir = (dirPath, dir = 'app') => {
  const mainDir = (dir === 'dev') ? '../../../dev' : '../../../app'
  return {
    path : path.join(__dirname, `${mainDir}/${dirPath}`),
    url: `${dirPath}`
  }
}

module.exports.server = server
module.exports.app = app
module.exports.dir = dir