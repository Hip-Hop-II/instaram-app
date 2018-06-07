import jwt from 'jsonwebtoken'

import constants from '../config/constans'
import User from '../models/User'

// 验证是否存在token ({user: {_id: 5k23asd123123sd...}})
export async function requireAuth (user) {
  if (!user || !user._id) {
    throw new Error('token为空！')
  }
  const me = await User.findById(user._id)
  if (!me) {
    throw new Error('token验证失败')
  }
  return me
}

export function decodeToken (token) {
  const arr = token.split(' ')
  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], constants.JWT_SECRET)
  }
  throw new Error('Token not valid')
}
