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
import dayjs from 'dayjs'

class CardContentItem extends Component {
  render() {
    const {_id, photo, text, favoriteCount, isFavorited, favoriteTweetOnPress, commentOnPress} = this.props
    const {username, avatar, createdAt} = this.props.user
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail 
              source={{uri: avatar}}
            />
            <Body>
              <Text>{username}</Text>
              <Text note>{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={{uri: photo}}
            style={styles.cardBodyImage}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent onPress={() => favoriteTweetOnPress(_id)}>
              <Icon 
              name={isFavorited ? 'ios-heart': 'ios-heart-outline'}
              style={{color: isFavorited ? colors.LIGHT_RED : colors.BLACK}}
              />
            </Button>
            <Button transparent onPress={ () => commentOnPress(_id)}>
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
          <Text style={styles.likeCardItemText}>{favoriteCount} likes</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text style={styles.discription}>{text}</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

CardContentItem.propTypes = {
  favoriteTweetOnPress: PropTypes.func,
  commentOnPress: PropTypes.func,
  _id: PropTypes.string,
  user: PropTypes.object,
  photo: PropTypes.string,
  text: PropTypes.string,
  isFavorited: PropTypes.bool,
  favoriteCount: PropTypes.number
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
  },
  discription: {
    color: colors.PRIMARY,
    fontSize: 16
  }
})
export default CardContentItem
