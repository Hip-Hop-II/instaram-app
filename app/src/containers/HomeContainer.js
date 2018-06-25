import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
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
    lastTweets: null,
    sending: false,
    comment: ''
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
  _comment = () => {
    this.setState({ sending: true})
  }
  _renderCard () {
    return this.props.tweets.map((item, index) => {
      return (
        <CardContentItem key={index} {...item} favoriteTweetOnPress={this._favoriteTweet} commentOnPress={this._comment} />
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
  _textOnBlur = () => {
    this.setState({sending: false})
  }
  componentDidMount () {
    this.setState({loading: false})
    this._onRefresh()
  }
  _sendOnChangeText = (comment) => {
    this.setState({comment})
  }
  _onScroll = () => {
    this.setState({sending: false})
  }
  get _sendButtonDisabled () {
    return !this.state.comment.length
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
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <Container style={styles.container}>
        {this._renderHeader()}
        <ScrollView style={styles.scrollView}
        scrollEventThrottle={16}
        onScroll={this._onScroll}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this._renderCard()}
        </ScrollView>
        {this.state.sending && (
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputText} onBlur={this._textOnBlur} 
            onChangeText={this._sendOnChangeText}
            returnKeyType="send" placeholder="请输入内容" autoFocus={true} />
            <Button style={[styles.inputButton, {backgroundColor: this._sendButtonDisabled ? colors.LIGHT_PRIMARY : colors.PRIMARY}]} disabled={this._sendButtonDisabled}>
              <Text style={styles.inputButtonText}>send</Text>
            </Button>
          </View>
        )}
      </Container>
      </KeyboardAvoidingView>
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
  },
  inputWrapper: {
    height: 40,
    backgroundColor: colors.LIGHT_WHITE,
    borderTopWidth: 1,
    borderTopColor: colors.LIGHT_BLACK,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputText: {
    height: 30,
    flex: 4,
    borderWidth: .5,
    borderColor: colors.LIGHT_BLACK,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  inputButton: {
    flex: 1,
    height: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  inputButtonText: {
    color: colors.WHITE,
    fontSize: 12
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
