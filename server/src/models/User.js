import mongoose, {Schema} from 'mongoose'
import {hashSync, compareSync} from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import constans from '../config/constans'

const UserSchema = new Schema({
  username: {
    unique: true,
    type: String
  },
  password: {
    type: String
  },
  avatar: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: true
})

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    console.log(this.password)
    return next()
  }
  return next()
})
UserSchema.methods = {
  // 密码加密
  _hashPassword (password) {
    return hashSync(password)
  },
  // 验证密码
  authenticateUser(password) {
    return compareSync(password, this.password)
  },
  // 创建token
  createToken () {
    return jwt.sign({
      _id: this._id
    },
    constans.JWT_SECRET)
  }
}

export default mongoose.model('User', UserSchema)
