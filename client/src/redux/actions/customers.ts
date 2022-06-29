import axios from 'axios'
import { Dispatch } from 'redux'

import {
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_FAILURE,
  GET_ALL_CUSTOMERS_SUCCESS,
  CustomersActions,
} from '../../types'

//Get all customers
export function GetAllCustomersRequestAction(): CustomersActions {
  return {
    type: GET_ALL_CUSTOMERS_REQUEST,
  }
}

export function GetAllCustomersFailureAction(errorMsg: string): CustomersActions {
  return {
    type: GET_ALL_CUSTOMERS_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function GetAllCustomersSuccessAction(customers: any[]): CustomersActions {
  return {
    type: GET_ALL_CUSTOMERS_SUCCESS,
    payload: {
      customers,
    }
  }
}

export function fetchAllCustomers() {
  return async function (dispatch: Dispatch) {
    dispatch(GetAllCustomersRequestAction())
    try {
      const res = await axios.get('http://localhost:5050/api/v1/customers')
      const customersData = res.data
      console.log('customerData fromm action', customersData)
      return dispatch(GetAllCustomersSuccessAction(customersData))
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetAllCustomersFailureAction('Page not found'))
      }
      return dispatch(GetAllCustomersFailureAction('Oops! Something went wrong...'))
    }
  }
}