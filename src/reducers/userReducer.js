import { USER_LOGIN_REQUEST, LOGOUT, USER_REQUEST } from 'constants/constants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { userInfo: action.payload }
    default:
      return state
  }
}

export const checkUseReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { user: action.payload }
    default:
      return state
  }
}

export const logout = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGOUT:
      return {}
    default:
      return state
  }
}
