//Action types for USERS
export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'

export type UserType = {
  internalRate: number,
  _id: string,
  fullName: string,
}
export type UsersState = {
  isLoading: boolean
  users: UserType[]
  error: any
}
export type GetAllUsersRequestAction = {
  type: typeof GET_ALL_USERS_REQUEST
}
export type GetAllUsersFailureAction = {
  type: typeof GET_ALL_USERS_FAILURE
  payload: {
    errorMsg: string
  }
}
export type GetAllUsersSuccessAction = {
  type: typeof GET_ALL_USERS_SUCCESS
  payload: {
    users: any[]
  }
}
export type UsersActions =
  |GetAllUsersRequestAction
  |GetAllUsersFailureAction
  |GetAllUsersSuccessAction

//Action types for CUSTOMERS
export const GET_ALL_CUSTOMERS_REQUEST = 'GET_ALL_CUSTOMERS_REQUEST'
export const GET_ALL_CUSTOMERS_FAILURE = 'GET_ALL_CUSTOMERS_FAILURE'
export const GET_ALL_CUSTOMERS_SUCCESS = 'GET_ALL_CUSTOMERS_SUCCESS'

export type CustomerType = {
  _id: string,
  activity: string,
  billable: string,
  hourlyRate: number,
  monthlyRate: number,
  customerName: string,
  project: string,
}

export type CustomersState = {
  isLoading: boolean
  customers: CustomerType[]
  error: any
}
export type GetAllCustomersRequestAction = {
  type: typeof GET_ALL_CUSTOMERS_REQUEST
}
export type GetAllCustomersFailureAction = {
  type: typeof GET_ALL_CUSTOMERS_FAILURE
  payload: {
    errorMsg: string
  }
}
export type GetAllCustomersSuccessAction = {
  type: typeof GET_ALL_CUSTOMERS_SUCCESS
  payload: {
    customers: any[]
  }
}
export type CustomersActions =
  |GetAllCustomersRequestAction
  |GetAllCustomersFailureAction
  |GetAllCustomersSuccessAction


//Action types for TIMESHEETS
export const GET_ALL_TIMESHEETS_REQUEST = 'GET_ALL_TIMESHEETS_REQUEST'
export const GET_ALL_TIMESHEETS_FAILURE = 'GET_ALL_TIMESHEETS_FAILURE'
export const GET_ALL_TIMESHEETS_SUCCESS = 'GET_ALL_TIMESHEETS_SUCCESS'

export type TimesheetType = {
  rate: number,
  _id: string,
  date: Date,
  from: Date,
  to: Date,
  duration: number,
  userName: UserType[],
  customerName: CustomerType[],
  exported: string,
}
export type TimesheetsState = {
  isLoading: boolean
  timesheets: TimesheetType[]
  error: any
}
export type GetAllTimesheetsRequestAction = {
  type: typeof GET_ALL_TIMESHEETS_REQUEST
}
export type GetAllTimesheetsFailureAction = {
  type: typeof GET_ALL_TIMESHEETS_FAILURE
  payload: {
    errorMsg: string
  }
}
export type GetAllTimesheetsSuccessAction = {
  type: typeof GET_ALL_TIMESHEETS_SUCCESS
  payload: {
    timesheets: any[]
  }
}
export type TimesheetsActions =
  |GetAllTimesheetsRequestAction
  |GetAllTimesheetsFailureAction
  |GetAllTimesheetsSuccessAction


// For the app
export type AppState = {
  users: UsersState
  customers: CustomersState
  timesheets: TimesheetsState
}