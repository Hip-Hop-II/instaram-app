import bodyParser from 'body-parser'
import {decodeToken} from '../services/auth'

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (token) {
      const user = await decodeToken(token)
      req.user = user
    } else {
      req.user = null
    }
    return next()
  } catch (error) {
    throw error
  }
}

export default app => {
  app.use(bodyParser.json())
  app.use(auth)
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    if (req.method === 'OPTIONS') {
      res.send(200)
    } else {
      next()
    }
  })
}
