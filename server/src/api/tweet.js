import Tweet from '../models/Tweet'
import User from '../models/User'
import FavoriteTweet from '../models/FavoriteTweet'

/**
 * 获取所有的tweet
 */
export async function getTweets (req, res) {
  try {
    const user = req.user._id
    // const p1 = await Tweet.find({}).sort({createdAt: -1})
    const p1 = await Tweet.find({}).populate('user').sort({createdAt: -1})
    const p2 = await FavoriteTweet.findOne({userId: user})
    const [tweets, favorites] = await Promise.all([p1, p2])

    // 判断是否点赞
    const tweetsToSend = tweets.map((tweet, index) => {
      const tw = tweet.toJSON()
      return {
        ...tw,
        isFavorited: favorites.tweets.some(t => t.equals(tweet._id))
      }
    })
    return res.json({
      data: tweetsToSend,
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

export async function favoriteTweet (req, res) {
  try {
    const user = req.user._id
    const {_id} = req.body
    const favorites = await FavoriteTweet.findOne({userId: user})
    const fav = await favorites.userFavoritedTweet(_id)
    return res.json({
      status: 200,
      data: fav,
      message: ''
    })
  } catch (error) {
    throw error
  }
}
