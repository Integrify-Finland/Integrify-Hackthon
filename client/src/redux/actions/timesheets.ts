import axios from 'axios'
import { Dispatch } from 'redux'

import {
  GET_ALL_TIMESHEETS_REQUEST,
  GET_ALL_TIMESHEETS_FAILURE,
  GET_ALL_TIMESHEETS_SUCCESS,
  TimesheetsActions,
} from '../../types'

//Get all timesheets
export function GetAllTimesheetsRequestAction(): TimesheetsActions {
  return {
    type: GET_ALL_TIMESHEETS_REQUEST,
  }
}

export function GetAllTimesheetsFailureAction(errorMsg: string): TimesheetsActions {
  return {
    type: GET_ALL_TIMESHEETS_FAILURE,
    payload: {
      errorMsg,
    }
  }
}

export function GetAllTimesheetsSuccessAction(timesheets: any[]): TimesheetsActions {
  return {
    type: GET_ALL_TIMESHEETS_SUCCESS,
    payload: {
      timesheets,
    }
  }
}

export function fetchAllTimesheets() {
  return async function (dispatch: Dispatch) {
    dispatch(GetAllTimesheetsRequestAction())
    try {
      const res = await axios.get('http://localhost:5050/api/v1/timesheets')
      const timesheetsData = res.data
      console.log('timesheetData fromm action', timesheetsData)
      return dispatch(GetAllTimesheetsSuccessAction(timesheetsData))
    } catch (error : any) {
      if (error.response.status === 404) {
        return dispatch(GetAllTimesheetsFailureAction('Page not found'))
      }
      return dispatch(GetAllTimesheetsFailureAction('Oops! Something went wrong...'))
    }
  }
}