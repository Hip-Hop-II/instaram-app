import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { Container, Content, Icon, Header, Left, Body, Right, Title, Button, Spinner } from 'native-base'
import CardContentItem from '../components/CardItem'
import { colors } from '../utils/constants'
import HeaderButton from '../components/Buttons/HeaderButton'
import {connect} from 'react-redux'
import {getTweets} from '../redux/actions/tweet'

import {Tweet} from '../api'

class HomeContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor, fontSize: 24 }} />
    )
  }
  state = {
    loading: false
  }
  _renderCard () {
    return this.props.tweets.map((item, index) => {
      return (
        <CardContentItem key={index} {...item} />
      )
    })
  }
  _newTweet = () => {
    this.props.navigation.navigate('NewTweet')
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
          <Title>Instagram</Title>
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
    this.props.getTweets()
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
        <Content>
          {this._renderCard()}
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
const mapStateToProps = ({tweet}) => ({
  tweets: tweet.tweets
})
const mapDispatchToProps = {
  getTweets
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
