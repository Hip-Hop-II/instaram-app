import React from 'react'
import {ThemeProvider} from 'styled-components'
import AppNavigator from './src/navigation/AppNavigator'

import {colors} from './src/utils/constants'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}

