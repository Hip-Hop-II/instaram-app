import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {
  Icon,
  Button,
  Container
} from 'native-base'
import {ImagePicker, Permissions} from 'expo'

class SendContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-add-circle" style={{color: tintColor, fontSize: 24}} />
    )
  }
  componentDidMount () {
    // this._openImagePicker()
  }
  _openImagePicker = async () => {
    const {status} = await Permissions.getAsync(Permissions.CAMERA)
    if (status !== 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [1, 1]
      })
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Button onPress={this._openImagePicker}>
          <Text>照片</Text>
        </Button>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SendContainer
