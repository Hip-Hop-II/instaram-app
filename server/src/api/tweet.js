import Tweet from '../models/Tweet'
import User from '../models/User'

/**
 * 获取所有的tweet
 */
export async function getTweets (req, res) {
  try {
    const tweet = await Tweet.find({}).populate('user').sort({createdAt: -1})
    return res.json({
      data: tweet,
      message: '',
      status: 200
    })
  } catch (error) {
    throw error
  }
}

export async function createTweet (req, res) {
  try {
    const {text, photo} = req.body
    const {_id} = req.user
    const tweet = await Tweet.create({
      text,
      photo,
      user: _id
    })
    if (tweet) {
      return res.json({
        data: {},
        status: 200,
        message: '成功'
      })
    }
  } catch (error) {
    throw error
  }
}

export async function getUserTweets (req, res) {
  try {
    const user = req.user._id
    const userTweets = await Tweet.find({user}).sort({createdAt: -1})
    const users = await User.findById(user)
    const count = await Tweet.find({user}).count()
    if (userTweets) {
      return res.json({
        data: {
          user: {
            ...users,
            count
          },
          data: userTweets
        },
        message: '',
        status: 200
      })
    }
  } catch (error) {
    throw error
  }
}
