import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import {
  Container,
  Icon,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button
} from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { colors, dimensions } from '../utils/constants'

import UserInfo from '../components/Users/UserInfo'
import Tabs from '../components/Users/Tabs'

import { tabs, media } from '../data/user'

class UserContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  state = {
    tabActiveIndex: 0
  }
  _tabItemOnPress = (index) => {
    this.setState({ tabActiveIndex: index })
  }
  _renderSection = () => {
    return media.map((item, index) => {
      return (
        <TouchableOpacity 
          style={[styles.imageWrapper, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]} 
          key={index}>
          <Image
            source={{ uri: item.photo }}
            style={styles.photo}
          />
        </TouchableOpacity>
      )
    })

  }
  _renderHeader = () => {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="md-person-add" style={{ color: colors.SECONDARY }} />
          </Button>
        </Left>
        <Body>
          <Title>Instagram</Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={this._newTweet}>
            <EntypoIcon name="back-in-time" size={30} color={colors.SECONDARY} />
          </TouchableOpacity>
        </Right>
      </Header>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        {this._renderHeader()}
        <ScrollView style={styles.scrollView}>
          <View style={styles.wrapper}>
            <UserInfo />
          </View>
          <View>
            <Tabs tabs={tabs} activeIndex={this.state.tabActiveIndex} tabItemOnPress={this._tabItemOnPress} />
            <View style={styles.tabContent}>
              {this._renderSection()}
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  scrollView: {
    flex: 1
  },
  wrapper: {
    marginTop: 10,
    marginBottom: 20
  },
  imageWrapper: {
    width: dimensions.width / 3,
    height: dimensions.height / 4,
    marginBottom: 2
  },
  photo: {
    width: undefined,
    flex: 1
  },
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default UserContainer
