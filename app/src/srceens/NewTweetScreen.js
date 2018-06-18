import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import {Container, Content, Button, Icon} from 'native-base'
import {colors} from '../utils/constants'
import InputField from '../components/Form/InputField'
import {ImagePicker, Permissions} from 'expo'
import {Tweet} from '../api'
import {connect} from 'react-redux'
import {getTweets} from '../redux/actions/tweet'

class NewTweetScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 10}}>
        <Text>取消</Text>
      </TouchableOpacity>
    )
  })
  state = {
    text: '',
    result: {}
  }
  _openImagePicker = async () => {
    const {status} = await Permissions.getAsync(Permissions.CAMERA)
    if (status !== 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [1, 1]
      })
      alert(JSON.stringify(result))
      if (!result.cancelled) {
        this.setState({
          result
        })
      }
    }
  }
  _uploadOnPress = () => {
    this._openImagePicker()
  }
  _changeText = (text) => {
    this.setState({text})
  }
  get _buttonDisabled () {
    return this.state.text.length < 5
  }
  get _textLength () {
    return 140 - this.state.text.length
  }
  _submitOnPress = async () => {
    try {
      const {text} = this.state
      const {uri} = this.state.result
      const data = await Tweet.createTweet({
        text,
        photo: uri
      })
      if (data.status === 200) {
        this.props.navigation.goBack()
        this.props.getTweets()
      }
    } catch (error) {
      throw error
    }
  }
  render() {
    const {width, height, uri} = this.state.result
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.content}>
            <InputField 
              placeholder="发表想说的一些事..."
              multiline={true}
              inputStyle={{height: 150, textAlignVertical: 'top', textAlign: 'left'}}
              onChangeText={(value) => this._changeText(value)}
              maxLength={140}
            />
            <Text style={styles.lengthText}>
              {this._textLength}
            </Text>
            {!this.state.result.uri ? 
            <Button transparent style={{padding: 0, height: 80}} onPress={this._uploadOnPress}>
              <Icon name="ios-add-circle-outline" 
              style={{fontSize: 40, color: colors.LIGHT_BLACK}}
              />
            </Button>
            : <Image source={{uri}} style={{height: 80, width: 120}} /> }
            <View style={styles.driver}></View>
            <Button style={styles.submitButton} disabled={this._buttonDisabled} onPress={this._submitOnPress}>
              <Text style={styles.submitButtonText}>发表</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingTop: 10,
    position: 'relative'
  },
  sendText: {
    color: colors.PRIMARY
  },
  submitButton: {
    width: 120,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  submitButtonText: {
    fontSize: 16,
    color: colors.WHITE,
    textAlign: 'center'
  },
  lengthText: {
    position: 'absolute',
    top: 150,
    right: '5%',
    color: colors.PRIMARY
  },
  driver: {
    flex: 1,
    height: .5,
    backgroundColor: colors.LIGHT_GRAY,
    marginBottom: 10
  }
})

export default connect(undefined, {getTweets})(NewTweetScreen)
