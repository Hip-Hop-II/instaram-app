import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import {Button, Spinner, Toast} from 'native-base'
import {colors} from '../utils/constants'
import {User} from '../api'

import InputField from '../components/Form/InputField'

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  state = {
    loading: false,
    username: '',
    password: ''
  }
  _registOnPress = () => {
    this.props.navigation.navigate('Signup')
  }
  _login = async () => {
    const {username, password} = this.state
    try {
      this.setState({loading: true})
      const data = await User.login({username, password})
      this.setState({loading: false})
      if (data.status === 200) {
        this.props.navigation.navigate('Home')
        await AsyncStorage.setItem('@insAndapp', data.token)
      } else if (data.status === 400) {
        Toast.show({
          text: data.message,
          type: 'danger'
        })
      }
    } catch (error) {
      throw error
    }
  }
  _onChangeText = (value, type) => {
    if (type === 'username') {
      this.setState({username: value})
    } else {
      this.setState({password: value})
    }
  }
  get _btnDisabled () {
    const {username, password} = this.state
    return !username || !password
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={[styles.container, {paddingTop: 60}]}>
          <Spinner color={colors.SECONDARY} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.logoImageWrapper}>
          <Image source={require('../images/logo.png')} style={styles.logoImage} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <InputField
              placeholder="用户名/邮箱"
              placeholderTextColor={colors.LIGHT_BLACK}
              keyboardType="email-address"
              onChangeText={(value) => this._onChangeText(value, 'username')}
            />
            <InputField
              placeholder="密码"
              type="password"
              placeholderTextColor={colors.LIGHT_BLACK}
              onChangeText={(value) => this._onChangeText(value, 'password')}
            />
            <Button style={styles.submitButton} onPress={this._login} disabled={this._btnDisabled}>
              <Text style={styles.submitButtonText}>登录</Text>
            </Button>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>还没有账号?</Text>
          <Button transparent onPress={this._registOnPress}>
            <Text style={styles.footerButtonText}> 请注册</Text>
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
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: '10%',
  },
  logoImageWrapper: {
    height: 54,
    marginTop: 160,
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

export default LoginScreen
