import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  Button,
  Icon
} from 'native-base'
import { colors } from '../../utils/constants';

class Tabs extends Component {
  _renderTabs = () => {
    const {activeIndex, tabs, tabItemOnPress} = this.props
    return tabs.map((tab, index) => (
      <Button transparent key={index} style={styles.buttonItem} onPress={() => tabItemOnPress(index)}>
        <Icon name={tab.icon} 
        style={{color: activeIndex === index ? colors.PRIMARY : colors.LIGHT_BLACK, fontSize: 30}}
        />
      </Button>
    ))
  }
  render() {
    return (
      <View style={styles.wrapper}>
        {this._renderTabs()}
      </View>
    )
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    flexDirection: 'row',
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderBottomColor: colors.LIGHT_BLACK,
    borderTopColor: colors.LIGHT_BLACK
  },
  buttonItem: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default Tabs