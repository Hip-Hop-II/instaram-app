import {NavigationActions} from 'react-navigation'
import {AppNavigator} from '../../navigation/AppNavigator'
import {StatusBar} from 'react-native'

const firstAction = AppNavigator.router.getActionForPathAndParams('Login')
const initNavState = AppNavigator.router.getStateForAction(firstAction)

export const nav = (state = initNavState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state)
  return nextState || state
}
