import mongoose, {Schema} from 'mongoose'
import Tweet from './Tweet'

const FavoriteTweetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tweets: [{
    type: Schema.Types.ObjectId,
    ref: 'Tweet'
  }]
})

FavoriteTweetSchema.methods = {
  async userFavoritedTweet (tweetId) {
    try {
      if (this.tweets.some(t => t.equals(tweetId))) {
        this.tweets.pull(tweetId)
        await this.save()
        const tweet = await Tweet.decFavoriteCount(tweetId)
        const t = tweet.toJSON()
        return {
          isFavorited: false,
          ...t
        }
      }
  
      const tweet = await Tweet.incFavoriteConut(tweetId)
      const t = tweet.toJSON()
      this.tweets.push(tweetId)
      this.save()
      return {
        isFavorited: true,
        ...t
      }
    } catch (error) {
      throw error
    }
  }
}

FavoriteTweetSchema.index({userId: 1}, {unique: true})
export default mongoose.model('FavoriteTweet', FavoriteTweetSchema)
