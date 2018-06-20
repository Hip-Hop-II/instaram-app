import React, { Component } from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'
import {
  Container,
  Content,
  Button
} from 'native-base'
import {colors} from '../utils/constants'

import {connect} from 'react-redux'
import {logout} from '../redux/actions/user'

class SettingScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('username')
  })

  _logout = () => {
    this.props.logout()
    this.props.navigation.replace('Login')
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>hello setting</Text>
          <Button style={styles.logoutButton} onPress={this._logout}>
            <Text style={styles.logoutButtonText}>退出登录</Text>
          </Button>
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
  logoutButton: {
    backgroundColor: colors.PRIMARY,
    width: '90%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  logoutButtonText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '500'
  }
})

export default connect(undefined, {logout})(SettingScreen)
