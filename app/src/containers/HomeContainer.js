import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'
import {Container, Content, Icon} from 'native-base'
import CardContentItem from '../components/CardItem'
import { colors } from '../utils/constants';

class HomeContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-home" style={{color: tintColor, fontSize: 24}} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
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
    flex: 1,
    backgroundColor: colors.WHITE
  }
})
export default HomeContainer
