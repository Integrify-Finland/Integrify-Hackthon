import { combineReducers } from 'redux'

import users from './users'
import customers from './customers'
import timesheets from './timesheets'

const rootReducer = () =>
  combineReducers({
    users,
    customers,
    timesheets,
  })

export default rootReducer