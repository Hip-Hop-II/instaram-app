import express from 'express'
import * as users from './user'

const router = express.Router()

router.post('/signup', users.signup)

export default router
