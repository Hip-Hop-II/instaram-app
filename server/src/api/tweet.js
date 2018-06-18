import Tweet from '../models/Tweet'

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
    const tweet = await Tweet.create({
      text,
      photo,
      user: '5b2751aa64f45779646c40fe'
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
