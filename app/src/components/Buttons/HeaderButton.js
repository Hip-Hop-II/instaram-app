import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {Icon} from 'native-base'
import {colors} from '../../utils/constants'

function HeaderButton ({name, size, color, onPress, headerStyle}) {
  return (
      <Icon 
      name={name}
      color={color || colors.SECONDARY}
      />
    
  )
}

HeaderButton.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-end'
  }
})

export default HeaderButton