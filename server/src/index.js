import express from 'express'
import constans from './config/constans'
import router from './api'
import middlewares from './middleware'
// 连接数据库
import './config/db'

const app = express()
middlewares(app)
app.use('/', router)

app.listen(constans.PORT, (error) => {
  if (error) {
    console.error(error)
  }
  console.log(`App listen to prot: ${constans.PORT}`)
})
