import React, { Component } from 'react'
import MainNavigator from '../navigation/LoggedTabNavigator'

import HeaderButton from '../components/Buttons/HeaderButton'

class HomeScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Instagram',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center'
    },
    headerLeft: (
      <HeaderButton name="ios-camera-outline" headerStyle={{marginLeft: 10}} />
    ),
    headerRight: (
      <HeaderButton name="ios-send-outline" headerStyle={{marginRight: 10}} />
    ),
    header: null
  })

  render() {
    return (
      <MainNavigator />
    )
  }
}

export default HomeScreen
