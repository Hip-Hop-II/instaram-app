import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import {Container, Content, Icon, Header, Left, Body, Right, Title, Button} from 'native-base'
import CardContentItem from '../components/CardItem'
import { colors } from '../utils/constants'
import HeaderButton from '../components/Buttons/HeaderButton'

class HomeContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor, fontSize: 24}} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-camera-outline" style={{color: colors.SECONDARY}} />
            </Button>
          </Left>
          <Body>
            <Title>Instagram</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-send-outline" style={{fontSize: 30, color: colors.SECONDARY}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <CardContentItem />
          <CardContentItem />
          <CardContentItem />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE
  }
})
export default HomeContainer
