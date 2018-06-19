import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import { colors, dimensions } from '../../utils/constants'

class ThumbnailItem extends Component {
  render() {
    const {photo, currentIndex} = this.props
    return (
      <TouchableOpacity
        style={[styles.imageWrapper, currentIndex %3 !== 0 ? {paddingLeft: 2}: {paddingLeft: 0}]}>
        <Image
          source={{ uri: photo }}
          style={styles.photo}
        />
      </TouchableOpacity>
    )
  }
}

ThumbnailItem.propTypes = {
  photo: PropTypes.string.isRequired,
  currentIndex: PropTypes.number
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: dimensions.width / 3,
    height: dimensions.height / 4,
    marginBottom: 2
  },
  photo: {
    width: undefined,
    flex: 1
  }
})

export default ThumbnailItem
