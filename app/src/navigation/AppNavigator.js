import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {initializeListeners} from 'react-navigation-redux-helpers'

import HomeScreen from '../srceens/HomeScreen'
import {navigationPropConstructor} from '../redux/store'


export const AppNavigator = createStackNavigator({
  Main: {
    screen: HomeScreen
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
    console.log('=========')
    console.log('=========', navigationPropConstructor)
    console.log('=========')
    const navigation= navigationPropConstructor(
      dispatch,
      nav
    )
    return (
      <AppNavigator navigation={navigation} />
    )
  }
}

export default connect(state => ({nav: state.nav}))(AppWithNavigationState)
