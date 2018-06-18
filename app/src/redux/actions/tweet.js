import {Tweet} from '../../api'
export function getTweets (data) {
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