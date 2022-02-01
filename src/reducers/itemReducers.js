import {
  GET_INVENTORY,
  ADD_TO_INVENTORY,
  UPDATE_INVENTORY,
} from 'constants/constants'

export const getListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_INVENTORY:
      return {
        list: action.payload,
      }
    default:
      return state
  }
}

export const addToInventoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_INVENTORY:
      return action.payload
    default:
      return state
  }
}

export const updateInventoryReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_INVENTORY:
      return action.payload
    default:
      return state
  }
}
