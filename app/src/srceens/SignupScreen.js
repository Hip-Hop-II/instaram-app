import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import {Button, Icon, Spinner} from 'native-base'
import {colors, avatarImg} from '../utils/constants'
import {User} from '../api'

import InputField from '../components/Form/InputField'

class SignupScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  state={
    username: '',
    email: '',
    password: '',
    loading: false
  }
  _loginOnPress = () => {
    this.props.navigation.navigate('Login')
  }
  _signOnPress = async () => {
    try {
      this.setState({loading: true})
      const {username, email, password} = this.state
      const data = await User.signup({
        username,
        email,
        password,
        avatar: avatarImg
      })
      this.setState({loading: false})
      if (data.status === 200) {
        await AsyncStorage.setItem('@insAndapp', data.token)
        this.props.navigation.navigate('Main')
      }
    } catch (error) {
      throw error
    }
  }
  _onChangeText = (value, type) => {
    if (type === 'username') {
      this.setState({username: value})
    } else if (type === 'email') {
      this.setState({email: value})
    } else {
      this.setState({password: value})
    }
  }
  get _validateForm () {
    const {username, email, password} = this.state
    return !username || !email || !password
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, {paddingTop: 70}]}>
          <Spinner />
        </View>
      )
    }
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
          <Image source={require('../images/logo.png')} style={styles.logoImage} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <InputField
              placeholder="用户名"
              placeholderTextColor={colors.LIGHT_BLACK}
              onChangeText={(value) => this._onChangeText(value, 'username')}
            />
            <InputField
              placeholder="邮箱"
              placeholderTextColor={colors.LIGHT_BLACK}
              keyboardType="email-address"
              onChangeText={(value) => this._onChangeText(value, 'email')}
            />
            <InputField
              placeholder="密码"
              type="password"
              placeholderTextColor={colors.LIGHT_BLACK}
              onChangeText={(value) => this._onChangeText(value, 'password')}
            />
            <Button style={styles.submitButton} onPress={this._signOnPress} disabled={this._validateForm}>
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
