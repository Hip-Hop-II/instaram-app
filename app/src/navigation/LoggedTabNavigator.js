import {createBottomTabNavigator} from 'react-navigation'
import {Platform} from 'react-native'

import HomeContainer from '../containers/HomeContainer'
import ExploreContainer from '../containers/ExploreContainer'
import NotificationContainer from '../containers/NotificationContainer'
import SendContainer from '../containers/SendContainer'
import UserContainer from '../containers/UserContainer'

import {colors} from '../utils/constants'
import {Icon} from 'native-base'

export default createBottomTabNavigator({
  Home: {
    screen: HomeContainer
  },
  Explore: {
    screen: ExploreContainer
  },
  Send: {
    screen: SendContainer
  },
  Notify: {
    screen: NotificationContainer
  },
  User: {
    screen: UserContainer
  },
}, {
  mode: 'model',
  initialRouteName: 'Home',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: colors.WHITE
        }
      })
    },
    activeTintColor: colors.BLACK,
    inactiveTintColor: colors.LIGHT_BLACK,
    showLabel: false,
    showIcon: true
  }
})
