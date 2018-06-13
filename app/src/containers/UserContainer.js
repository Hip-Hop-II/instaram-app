import React, { Component } from 'react'
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'
import {
  Container,
  Icon,
  Content
} from 'native-base'
import { colors } from '../utils/constants'

import UserInfo from '../components/Users/UserInfo'

class UserContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.wrapper}>
            <UserInfo />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  wrapper: {
    marginTop: 10
  }
})

export default UserContainer
