import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import {Icon} from 'native-base'

class NotificationContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-heart" style={{color: tintColor, fontSize: 24}} />
    )
  }
  render() {
    return (
      <View>
        <Text>hello NotificationContainer</Text>
      </View>
    )
  }
}

export default NotificationContainer
