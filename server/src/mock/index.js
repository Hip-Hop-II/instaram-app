import faker from 'faker'
import Tweet from '../models/Tweet'
import User from '../models/User'

const TWEET_TOTAL = 5
const USERS_TOTAL = 5

export default async () => {
  try {
    await Tweet.remove()
    await User.remove()

    await Array.from({length: USERS_TOTAL}).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: '123123',
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`
      })
      await Array.from({length: TWEET_TOTAL}).forEach(async () => {
        return Tweet.create({
          text: faker.lorem.sentence(),
          user: user._id,
          photo: `https://picsum.photos/800/600/?image=1${i}`
        })
      })
    })
  } catch (error) {
    throw error
  }
}
