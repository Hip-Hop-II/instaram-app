import {createStackNavigator, addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux'

import HomeScreen from '../srceens/HomeScreen'


export const AppNavigator = createStackNavigator({
  Main: {
    screen: HomeScreen,
  }
})

const AppWithNavigationState = ({dispatch, nav, listener}) => {
  const navigation = addNavigationHelpers({dispatch, state: nav, addListener: listener})
  return (
    <AppNavigator navigation={navigation} />
  )
}

export default connect(state => ({nav: state.nav}))(AppWithNavigationState)
