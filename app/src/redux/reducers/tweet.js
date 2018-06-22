export const tweet = (state={tweets: [], userTweets: {}}, action) => {
  switch (action.type) {
    case 'RECEIVE_TWEETS':
      return {
        ...state,
        tweets: action.tweets
      }
    case 'RECEIVE_USER_TWEETS':
      return {
        ...state,
        userTweets: action.userTweets
      }
    case 'UPDATE_FAV_TWEET':
      const {tweets} = state
      const newTweets = tweets.map((item) => {
        if (item._id === action._id) {
          return {
            ...item,
            isFavorited: action.isFavorited,
            favoriteCount: action.favoriteCount
          }
        }
        return item
      })
      return {
        ...state,
        tweets: newTweets
      }
    default:
      return state
  }
}
