import User from '../models/User'
export async function signup (req, res) {
  try {
    const {username, password, avatar, email} = req.body
    const user = await User.create({
      username,
      password,
      avatar,
      email
    })
    if (user) {
      return res.json({
        status: 200,
        token: user.createToken(),
        message: '注册成功'
      })
    }
  } catch (error) {
    throw error
  }
}

export async function login (req, res) {
  try {
    const {username, password} = req.body
    const user = await User.findOne({
      $or: [{username}, {email: username}]
    })
    if (!user) {
      return res.json({
        status: 400,
        message: '用户名不存在'
      })
    } else {
      if (!user.authenticateUser(password)) {
        return res.json({
          status: 400,
          message: '密码错误'
        })
      }
      return res.json({
        status: 200,
        token: user.createToken(),
        message: '登录成功'
      })
    }
  } catch (error) {
    throw error
  }
}

export async function uploadAvatar (req, res) {
  try {
    const {avatar} = req.body
    const {_id} = req.user
    const user = await User.findByIdAndUpdate(_id, {avatar}, {new: true})
    if (user) {
      return res.json({
        status: 200,
        message: '更新成功'
      })
    }
  } catch (error) {
    throw error
  }
}
