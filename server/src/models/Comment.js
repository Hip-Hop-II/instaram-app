import mongoose, {Schema} from 'mongoose'

const CommentSchema = new Schema({
  ownerUserId: { // 发表评论的用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  targetUserId: { // 评论的目标用户id
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  conent: {
    type: Array
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: 'Tweet'
  },
  parentType: {
    type: String
  }
})

export default mongoose.model('Comment', CommentSchema)
