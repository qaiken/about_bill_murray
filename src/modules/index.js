import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'

import data from './data'
import session from './session'

export default combineReducers({
  router,
  session,
  data
})
