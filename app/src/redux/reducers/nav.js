import {NavigationActions} from 'react-navigation'
import {AppNavigator} from '../../navigation/AppNavigator'
import {StatusBar} from 'react-native'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main')

const secondAction = AppNavigator.router.getActionForPathAndParams('Login')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)

const initNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
)

export const nav = (state = initNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'LOGGED':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case 'LOGOUT':
      alert('ccc')
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate('Login'),
        state
      )
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }
  return nextState || state
}
