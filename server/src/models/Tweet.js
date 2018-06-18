import mongoose, {Schema} from 'mongoose'

const TweetSchema = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140
  },
  photo: {
    type: String,
    required: true
  },
  favoriteCount: {
    type: Number,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

export default mongoose.model('tweet', TweetSchema)
