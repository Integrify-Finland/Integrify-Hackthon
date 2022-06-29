import {
  GET_ALL_TIMESHEETS_REQUEST,
  GET_ALL_TIMESHEETS_FAILURE,
  GET_ALL_TIMESHEETS_SUCCESS,
  TimesheetsActions,
  TimesheetsState
} from '../../types'

export default function timesheets(
  state: TimesheetsState = {
    isLoading: false,
    timesheets: [],
    error: '',
  },
  action: TimesheetsActions
): TimesheetsState {
  switch (action.type) {
    case GET_ALL_TIMESHEETS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_ALL_TIMESHEETS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }
    }

    case GET_ALL_TIMESHEETS_SUCCESS: {
      const allTimesheets = action.payload.timesheets.map((timesheets) => ({
        _id: timesheets._id, 
        rate: timesheets.rate,
        date: timesheets.date,
        from: timesheets.from,
        to: timesheets.to,
        duration: timesheets.duration,
        userName: timesheets.userName,
        customerName: timesheets.customerName,
        exported: timesheets.exported,
      }) )
      console.log('timesheetsData from reducer', allTimesheets)
      return {
        ...state,
        isLoading: false,
        timesheets: allTimesheets,
      }
    }

    default:
      return state
  }
}