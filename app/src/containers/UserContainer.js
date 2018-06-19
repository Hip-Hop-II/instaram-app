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
import {connect} from 'react-redux'
import {getUserTweets} from '../redux/actions/tweet'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import { colors, dimensions } from '../utils/constants'

import UserInfo from '../components/Users/UserInfo'
import ThumbnailItem from '../components/Users/ThumbnailItem'
import CardItem from '../components//CardItem'
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
    const data = this.props.userTweets.data || []
    const {tabActiveIndex} = this.state
    if (tabActiveIndex === 0) {
     const list = data.map((item, index) => {
        return (
          <ThumbnailItem style={index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }} key={index} {...item} />
        )
      })
      return (
        <View style={styles.tabContent}>
          {list}
        </View>
      )
    } else if (tabActiveIndex === 1) {
      const list = this._formatUser(data, this.props.userTweets.user).map((item, index) => {
        return (
          <CardItem key={index} {...item} />
        )
      })
      return (
        <View style={{flex: 1}}>
          {list}
        </View>
      )
    }
  }
  _formatUser (tweets, user) {
    return tweets.map(item => {
      return {
        ...item,
        user
      }
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
  componentDidMount () {
    this.props.getUserTweets()
  }
  render() {
    return (
      <Container style={styles.container}>
        {this._renderHeader()}
        <ScrollView style={styles.scrollView}>
          <View style={styles.wrapper}>
            <UserInfo {...this.props.userTweets.user} />
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
  tabContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

const mapStateToProps = ({tweet}) => ({
  userTweets: tweet.userTweets
})
const mapDispatchToProps = {
  getUserTweets
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
