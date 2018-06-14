/**
 * instaram-app
 * @author: xcxerxes
 */

 import { compose, createStore, applyMiddleware } from 'redux'
 import {createLogger} from 'redux-logger'
 import thunkMiddleware  from 'redux-thunk'
 import {createReactNavigationReduxMiddleware, createNavigationPropConstructor} from 'react-navigation-redux-helpers'

 import reducer from './reducers'

 const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__})

 export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

export const navigationPropConstructor = createNavigationPropConstructor('root')

 function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return createStore(reducer, initialState, enhancer)
 }

 export default configureStore({})
