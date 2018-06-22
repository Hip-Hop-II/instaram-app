import {Tweet} from '../../api'
export function getTweets () {
  return async (dispatch) => {
    try {
      const data = await Tweet.getTweets()
      if (data.status === 200) {
        dispatch({
          type: 'RECEIVE_TWEETS',
          tweets: data.data
        })
      }
    } catch (error) {
      throw error
    }
  }
}

export function getUserTweets () {
  return async (dispatch) => {
    try {
      const data = await Tweet.getUserTweets()
      if (data.status === 200) {
        dispatch({
          type: 'RECEIVE_USER_TWEETS',
          userTweets: data.data
        })
      }
    } catch (error) {
      throw error
    }
  }
}

export function updateFavoriteTweet (_id, isFavorited, favoriteCount) {
  return {
    type: 'UPDATE_FAV_TWEET',
    _id,
    isFavorited,
    favoriteCount
  }
}
