import React, { Component } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Container, Content, Icon, Header, Left, Body, Right, Title, Button, Spinner } from 'native-base'
import {colors} from '../utils/constants'

class NotificationContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-heart" style={{color: tintColor, fontSize: 24}} />
    )
  }
  _renderHeader = () => {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-camera-outline" style={{ color: colors.SECONDARY }} />
          </Button>
        </Left>
        <Body>
          <ImageBackground style={styles.headerImage} source={require('../images/logo.png')} />
        </Body>
        <Right>
          <TouchableOpacity onPress={this._newTweet}>
            <Icon name="ios-send-outline" style={{ fontSize: 30, color: colors.SECONDARY }} />
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        {this._renderHeader()}
        <Content>
          <Text>hello Notification</Text>
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
  headerImage: {
    width: 188/1.8,
    height: 54/1.8
  }
})

export default NotificationContainer
