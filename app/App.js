import React, { Component } from "react"
import { Root } from "native-base"
import { Font, AppLoading } from "expo"
import {Provider} from 'react-redux'
import store from './src/redux/store'
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
