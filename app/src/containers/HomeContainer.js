import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native'
import { Container, Content, Icon, Header, Left, Body, Right, Title, Button, Spinner } from 'native-base'
import CardContentItem from '../components/CardItem'
import { colors } from '../utils/constants'
import HeaderButton from '../components/Buttons/HeaderButton'
import {connect} from 'react-redux'
import {getTweets, updateFavoriteTweet, getUserTweets} from '../redux/actions/tweet'

import {Tweet} from '../api'

class HomeContainer extends Component {
  state = {
    loading: false,
    refreshing: false,
    lastTweets: null
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  _favoriteTweet = async (_id) => {
    try {
      const data = await Tweet.favoriteTweet({_id})
      if (data.status === 200) {
        this.props.updateFavoriteTweet(_id, data.data.isFavorited, data.data.favoriteCount)
        this.props.getUserTweets()
      }
    } catch (error) {
      throw error
    }
  }
  _renderCard () {
    return this.props.tweets.map((item, index) => {
      return (
        <CardContentItem key={index} {...item} favoriteTweetOnPress={this._favoriteTweet} />
      )
    })
  }
  _newTweet = () => {
    this.props.navigation.navigate('NewTweet')
  }
  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.getTweets()
    this.setState({refreshing: false})
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
  componentDidMount () {
    this.setState({loading: false})
    this._onRefresh()
  }
  render() {
    if (this.state.loading) {
      return (
        <Container style={styles.container}>
          {this._renderHeader()}
          <Spinner />
        </Container>
      )
    }
    return (
      <Container style={styles.container}>
        {this._renderHeader()}
        <ScrollView style={styles.scrollView}
          title="更新成功"
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this._renderCard()}
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE
  },
  headerImage: {
    width: 188/1.8,
    height: 54/1.8
  },
  scrollView: {
    flex: 1
  }
})
const mapStateToProps = ({tweet}) => ({
  tweets: tweet.tweets
})
const mapDispatchToProps = {
  getTweets,
  updateFavoriteTweet,
  getUserTweets
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
