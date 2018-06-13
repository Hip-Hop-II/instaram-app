import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'
import {
  Icon,
  Thumbnail,
  Text,
  Button
} from 'native-base'
import { avatarImg, colors } from '../../utils/constants';

class UserInfo extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarContent}>
          <Thumbnail source={{uri: avatarImg}} />
        </View>
        <View style={styles.userContent}>
          <View style={styles.userCaption}>
            <View style={styles.captionItem}>
              <Text style={styles.captionItemResult}>0</Text>
              <Text style={styles.captionItemText}>帖子</Text>
            </View>
            <View style={styles.captionItem}>
              <Text style={styles.captionItemResult}>0</Text>
              <Text style={styles.captionItemText}>粉丝</Text>
            </View>
            <View style={styles.captionItem}>
              <Text style={styles.captionItemResult}>0</Text>
              <Text style={styles.captionItemText}>关注</Text>
            </View>
          </View>
          <View style={styles.userAction}>
            <Button bordered  style={styles.editButton}>
              <Text style={styles.editButtonText}>编辑主页</Text>
            </Button>
            <Button bordered style={styles.settingButton}>
              <Icon
               name="ios-settings"
               style={{color: colors.SECONDARY}}
               />
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

UserInfo.propTypes = {

}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarContent: {
    flex: 1,
    alignItems: 'center'
  },
  userContent: {
    flex: 3
  },
  userCaption: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  captionItem: {
    alignItems: 'center'
  },
  captionItemResult: {
    fontWeight: '600',
    color: colors.SECONDARY
  },
  captionItemText: {
    color: colors.SECONDARY
  },
  userAction: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10
  },
  editButton: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.LIGHT_BLACK,
  },
  settingButton: {
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    borderColor: colors.LIGHT_BLACK
  },
  editButtonText: {
    color: colors.SECONDARY
  }
})
export default UserInfo