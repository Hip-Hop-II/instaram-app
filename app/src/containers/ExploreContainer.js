import React, { Component } from 'react'
import {
  View, 
  Text,
  ScrollView,
  Animated,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  Image,
  Easing
} from 'react-native'
import {
  Container,
  Icon,
  Content,
  Thumbnail,
  Header,
  Input,
  Item
} from 'native-base'
import { colors, dimensions } from '../utils/constants'
import { media } from '../data/user'
import ThumbnailItem from '../components/Users/ThumbnailItem'

import {connect} from 'react-redux'
import {getTweets} from '../redux/actions/tweet'

const MAX_HEIGHT = 80
const MIN_HEIGHT = 0
const SCROLL_MIN_HEIGHT = 30
class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-search" 
        style={{color: tintColor, fontSize: 24}}
      />
    )
  }
  scaleCheckmark = value => {
    Animated.timing(
      this.state.scaleCheckmarkValue,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.linear
      }
    ).start()
  }
  state = {
    scrollY: new Animated.Value(0),
    refreshing: false
  }
  _renderSection = () => {
    return this.props.tweets.map((item, index) => {
      return (
        <ThumbnailItem key={index} {...item} currentIndex={index} />
      )
    })
  }
  _onRefresh = async () => {
    this.setState({refreshing: true})
    await this.props.getTweets()
    this.setState({refreshing: false})
  }
  componentDidMount () {
    this._onRefresh()
  }
  render() {
    const searchOpaticy = this.state.scrollY.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [1, .5, 0],
      extrapolate: 'clamp'
    })
    const searchHeight = this.state.scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT - MIN_HEIGHT],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <Animated.View
        style={[styles.wrapper, {height: searchHeight, opacity: searchOpaticy}]}>
          <Item rounded style={{height: 30, backgroundColor: colors.LIGHT_WHITE}}>
            <Icon name="ios-search" style={{color: colors.SECONDARY}} />
            <Input placeholder="搜索"  />
          </Item>
        </Animated.View>
        <ScrollView
          style={styles.scrollView}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
        >
        <View style={styles.tabContent}>
              {this._renderSection()}
        </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  wrapper: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1
  },
  content: {
    backgroundColor: colors.PRIMARY
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

export default connect(({tweet}) => ({tweets: tweet.tweets}), {getTweets})(ExploreContainer)
