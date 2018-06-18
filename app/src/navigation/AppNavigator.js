import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {initializeListeners} from 'react-navigation-redux-helpers'

import HomeScreen from './LoggedTabNavigator'
import LoginScreen from '../srceens/LoginScreen'
import SignupScreen from '../srceens/SignupScreen'
import NewTweetScreen from '../srceens/NewTweetScreen'

import {navigationPropConstructor} from '../redux/store'

export const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Signup: {
    screen: SignupScreen
  },
  Main: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  NewTweet: {
    screen: NewTweetScreen
  }
}, {
  mode: 'modal'
})

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  }
  componentDidMount () {
    initializeListeners('root', this.props.nav)
  }
  render () {
    const {dispatch, nav} = this.props
    const navigation= navigationPropConstructor(
      dispatch,
      nav
    )
    return (
      <AppNavigator navigation={navigation} />
    )
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
  user: state.user
})

export default connect(mapStateToProps)(AppWithNavigationState)
