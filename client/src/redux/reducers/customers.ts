import {
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_FAILURE,
  GET_ALL_CUSTOMERS_SUCCESS,
  CustomersActions,
  CustomersState
} from '../../types'

export default function customers(
  state: CustomersState = {
    isLoading: false,
    customers: [],
    error: '',
  },
  action: CustomersActions
): CustomersState {
  switch (action.type) {
    case GET_ALL_CUSTOMERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_ALL_CUSTOMERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.errorMsg,
      }
    }

    case GET_ALL_CUSTOMERS_SUCCESS: {
      const allCustomers = action.payload.customers.map((customers) => ({
        _id: customers._id, 
        activity: customers.activity,
        billable: customers.billable,
        hourlyRate: customers.hourlyRate,
        monthlyRate: customers.monthlyRate,
        customerName: customers.customerName,
        project: customers.project,
      }) )
      console.log('customersData from reducer', allCustomers)
      return {
        ...state,
        isLoading: false,
        customers: allCustomers,
      }
    }

    default:
      return state
  }
}