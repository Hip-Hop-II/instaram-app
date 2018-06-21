import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
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
          <List>
            <ListItem>
              <Left>
                <Text>账号和安全</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>地区设置</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>音效和通知</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>问题反馈</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>关于我们</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <View style={styles.logoutButtonWrapper}>
          <Button style={styles.logoutButton} onPress={this._logout} rounded>
            <Text style={styles.logoutButtonText}>退出登录</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  logoutButtonWrapper: {
    position: 'absolute',
    left: '5%',
    right: '5%',
    bottom: 40,
  },
  logoutButton: {
    width: '100%',
    backgroundColor: colors.PRIMARY,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  logoutButtonText: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: '500'
  }
})

export default connect(undefined, {logout})(SettingScreen)
