import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Button,
  Icon
} from 'native-base'
import {avatarImg, cardItemImg, colors} from '../utils/constants'

class CardContentItem extends Component {
  render() {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail 
              source={{uri: avatarImg}}
            />
            <Body>
              <Text>Antony xia</Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{uri: cardItemImg}}
            style={styles.cardBodyImage}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon 
              name="ios-heart-outline"
              style={{color: colors.BLACK}}
              />
            </Button>
            <Button transparent>
              <Icon 
              name="ios-chatbubbles-outline"
              style={{color: colors.BLACK}}
              />
            </Button>
            <Button transparent>
              <Icon 
              name="ios-send-outline"
              style={{color: colors.BLACK}}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={styles.likeCardItem}>
          <Text style={styles.likeCardItemText}>102 likes</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text>Build The UI of the Feed Page of Instagram App Using React Native, React Navigation, StackNavigator, TabNavigator, Expo.io and Native Base </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

CardContentItem.propTypes = {

}

const styles = StyleSheet.create({
  cardBodyImage: {
    height: 200,
    width: null,
    flex: 1
  },
  likeCardItem: {
    height: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  likeCardItemText: {
    fontWeight: '600'
  }
})
export default CardContentItem
