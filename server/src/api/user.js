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
        code: 200,
        token: user.createToken()
      })
    }
  } catch (error) {
    throw error
  }
}
