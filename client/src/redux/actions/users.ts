import axios from 'axios'
import { Dispatch } from 'redux'

import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
  UsersActions,
} from '../../types'

//Get all users
export function GetAllUsersRequestAction(): UsersActions {
  return {
    type: GET_ALL_USERS_REQUEST,
  }
}

export function GetAllUsersFailureAction(errorMsg: string): UsersActions {
  return {
    type: GET_ALL_USERS_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function GetAllUsersSuccessAction(users: any[]): UsersActions {
  return {
    type: GET_ALL_USERS_SUCCESS,
    payload: {
      users,
    }
  }
}

export function fetchAllUsers() {
  return async function (dispatch: Dispatch) {
    dispatch(GetAllUsersRequestAction())
    try {
      const res = await axios.get('http://localhost:5050/api/v1/users')
      const usersData = res.data
      console.log('usersData from action', usersData)
      return dispatch(GetAllUsersSuccessAction(usersData))
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetAllUsersFailureAction('Page not found'))
      }
      return dispatch(GetAllUsersFailureAction('Oops! Something went wrong...'))
    }
  }
}