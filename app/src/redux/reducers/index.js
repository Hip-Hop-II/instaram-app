import {combineReducers} from 'redux'
import {nav} from './nav'
import {tweet} from './tweet'

export default combineReducers({
  nav,
  tweet
})
