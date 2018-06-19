import {config} from '../utils/constants'
import {
  AsyncStorage
} from 'react-native'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function parseParams (params={}) {
  try {
    // const data = await AsyncStorage.getItem('@token')
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'same-origin',
        // authorization: data != null ? data : ''
      }
    }
    if (params.method) {
      return {...defaultOptions, method: params.method || 'GET', body: JSON.stringify(params.data)}
    }
    return defaultOptions
  } catch (error) {
    throw error
  }
}

export const User = {
  login (data) {
    return fetch(`${config.API_PATH}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  signup (data) {
    return fetch(`${config.API_PATH}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  }
}

export const Tweet = {
  getTweets () {
    return fetch(`${config.API_PATH}/tweet/list`, parseParams())
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  createTweet (data) {
    return fetch(`${config.API_PATH}/tweet`, parseParams({
      method: 'POST',
      data
    }))
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  },
  getUserTweets () {
    return fetch(`${config.API_PATH}/usertweet/list`, parseParams())
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data)
      .catch(error => console.error(error))
  }
}
