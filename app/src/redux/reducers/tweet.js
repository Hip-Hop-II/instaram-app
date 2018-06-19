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
    default:
      return state
  }
}
