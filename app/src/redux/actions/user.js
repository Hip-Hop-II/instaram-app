import {User} from '../../api'
import {getUserTweets} from './tweet'
import {
  AsyncStorage
} from 'react-native'

export function uploadAvatar ({avatar}) {
  return async dispath => {
    try {
      const data = await User.uploadAvatar({avatar})
      if (data.status === 200) {
        dispath(getUserTweets())
      }
    } catch (error) {
      throw error
    }
  }
}

export function logged () {
  return {
    type: 'LOGGED'
  }
}

export function logout () {
  return async dispath => {
    try {
      await AsyncStorage.removeItem('@insAndapp')
      dispath({
        type: 'LOGOUT'
      })
    } catch (error) {
      throw error
    }
  }
}
