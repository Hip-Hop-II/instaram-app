import React, { Component } from 'react'
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'
import {
  Container,
  Icon,
  Content,
  Thumbnail
} from 'native-base'
import { colors } from '../utils/constants'

class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search" 
        style={{color: tintColor, fontSize: 24}}
      />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>

        </Content>
        <Text>explore</Text>
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

export default ExploreContainer
