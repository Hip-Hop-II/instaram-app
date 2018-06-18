import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {Icon} from 'native-base'
import { colors } from '../../utils/constants'

class InputField extends Component {
  render() {
    const {
      type,
      keyboardType,
      placeholder,
      placeholderTextColor,
      onChangeText,
      multiline,
      inputStyle,
      maxLength
    } = this.props
    const secureTextEntry = type === 'password'
    const borderStyle= multiline ? {borderWidth: 0} : {borderWidth: .5}
    return (
      <TextInput style={[styles.inputWrapper, borderStyle, inputStyle]}
      underlineColorAndroid="transparent"
      keyboardType={keyboardType || 'default'}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      multiline={multiline}
      maxLength={maxLength}
      />
    )
  }
}

InputField.propTypes = {
  type: PropTypes.string,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onChangeText: PropTypes.func,
  borderStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  maxLength: PropTypes.number
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: colors.LIGHT_GRAY,
    borderRadius: 4,
    height: 40,
    textShadowColor: colors.BLACK,
    paddingHorizontal: 10,
    marginBottom: 20,
    textShadowRadius: 5,
    textShadowOffset: {
      width: 0,
      height: 2
    }
  }
})

export default InputField