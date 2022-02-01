import {
  GET_EXECUTIVES,
  ADD_TO_EXECUTIVES,
  UPDATE_EXECUTIVES,
} from 'constants/constants'

export const getExecutivesListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EXECUTIVES:
      return {
        list: action.payload,
      }
    default:
      return state
  }
}

export const addToExecutivesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_EXECUTIVES:
      return action.payload
    default:
      return state
  }
}

export const updateExecutivesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_EXECUTIVES:
      return action.payload
    default:
      return state
  }
}
