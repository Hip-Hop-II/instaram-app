import React, { Component } from 'react'
import MainNavigator from '../navigation/LoggedTabNavigator'
import {
  View
} from 'react-native'

import HeaderButton from '../components/Buttons/HeaderButton'

class HomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })

  render() {
    return (
      <MainNavigator />
    )
  }
}

export default HomeScreen
