export const tweet = (state={tweets: []}, action) => {
  switch (action.type) {
    case 'RECEIVE_TWEETS':
      return {
        ...state,
        tweets: action.tweets
      }
    default:
      return state
  }
}
