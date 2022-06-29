import { combineReducers } from 'redux'

import users from './users'
import customers from './customers'


const rootReducer = () =>
  combineReducers({
    users,
    customers,
  })

export default rootReducer