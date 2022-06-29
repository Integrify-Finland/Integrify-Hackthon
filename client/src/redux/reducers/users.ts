import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
  UsersActions,
  UsersState
} from '../../types'

export default function users(
  state: UsersState = {
    isLoading: false,
    users: [],
    error: '',
  },
  action: UsersActions
): UsersState {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_ALL_USERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }
    }

    case GET_ALL_USERS_SUCCESS: {
      const allUsers = action.payload.users.map((users) => ({
        _id: users._id, 
        internalRate: users.internalRate,
        fullName: users.fullName
      }) )
      console.log('usersData from reducer', allUsers)
      return {
        ...state,
        isLoading: false,
        users: allUsers,
      }
    }

    default:
      return state
  }
}