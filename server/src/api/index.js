import express from 'express'
import * as users from './user'
import * as tweets from './tweet'

const router = express.Router()

router.post('/signup', users.signup)
router.post('/login', users.login)

// tweet
router.get('/tweet/list', tweets.getTweets)
router.post('/tweet', tweets.createTweet)
router.get('/usertweet/list', tweets.getUserTweets)

export default router
