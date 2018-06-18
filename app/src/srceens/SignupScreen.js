import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'
import {Button, Icon} from 'native-base'
import {logoImg, colors} from '../utils/constants'

import InputField from '../components/Form/InputField'

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  _loginOnPress = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon 
            name="ios-close"
            style={{fontSize: 45, color: colors.BLACK}}
            />
          </Button>
        </View>
        <View style={styles.logoImageWrapper}>
          <Image source={{uri: logoImg}} style={styles.logoImage} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <InputField
              placeholder="用户名"
              placeholderTextColor={colors.LIGHT_BLACK}
            />
            <InputField
              placeholder="邮箱"
              placeholderTextColor={colors.LIGHT_BLACK}
              keyboardType="email-address"
            />
            <InputField
              placeholder="密码"
              type="password"
              placeholderTextColor={colors.LIGHT_BLACK}
            />
            <Button style={styles.submitButton}>
              <Text style={styles.submitButtonText}>注册</Text>
            </Button>
            <Text style={styles.policyText}>注册即表示您同意我们的条款和隐私政策。</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>已拥有账号?</Text>
          <Button transparent onPress={this._loginOnPress}>
            <Text style={styles.footerButtonText}> 请登录</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  heading: {
    position: 'absolute',
    left: 10,
    right: 0,
    top: 30
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: '10%',
  },
  logoImageWrapper: {
    height: 54,
    marginTop: 140,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitButton: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY
  },
  submitButtonText: {
    fontSize: 18,
    color: colors.WHITE,
    fontWeight: '600'
  },
  logoImage: {
    width: 188,
    flex: 1,
    height: null
  },
  policyText: {
    marginTop: 15,
    fontSize: 12,
    paddingLeft: 10,
    color: colors.LIGHT_BLACK
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerButtonText: {
    color: colors.PRIMARY
  }
})

export default SignupScreen
