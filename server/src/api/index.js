import express from 'express'
import * as users from './user'
import * as tweets from './tweet'
import {requireAuth} from '../services/auth'

const router = express.Router()

router.post('/signup', users.signup)
router.post('/login', users.login)
router.post('/uploadAvatar', requireAuth, users.uploadAvatar)

// tweet
router.get('/tweet/list', requireAuth, tweets.getTweets)
router.post('/tweet', requireAuth, tweets.createTweet)
router.get('/usertweet/list', requireAuth, tweets.getUserTweets)

export default router
