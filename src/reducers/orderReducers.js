import { GET_ORDER, CREATE_ORDER } from 'constants/constants'

export const getOrderListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        list: action.payload,
      }
    default:
      return state
  }
}

export const createOrderReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return action.payload
    default:
      return state
  }
}
