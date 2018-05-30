import express from 'express'
import bodyParser from 'body-parser'
import constans from './config/constans'

// 连接数据库
import './config/db'

const app = express()

app.use(bodyParser.json())

app.listen(constans.PORT, (error) => {
  if (error) {
    console.error(error)
  }
  console.log(`App listen to prot: ${constans.PORT}`)
})
