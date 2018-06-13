import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../srceens/HomeScreen'

export default createStackNavigator({
  Main: {
    screen: HomeScreen,
  }
})
