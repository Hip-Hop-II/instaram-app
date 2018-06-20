import React, { Component } from "react"
import { Root } from "native-base"
import { Font, AppLoading } from "expo"
import {Provider} from 'react-redux'
import {
  AsyncStorage
} from 'react-native'
import store from './src/redux/store'
import {logged} from './src/redux/actions/user'
import AppWithNavigationState from './src/navigation/AppNavigator'
console.disableYellowBox = true

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({ loading: false })
    const token = await AsyncStorage.getItem('@insAndapp')
    if (token != null) {
      store.dispatch(logged())
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }
    return (
      <Provider store={store}>
        <Root>
          <AppWithNavigationState />
        </Root>
      </Provider>
    )
  }
}
