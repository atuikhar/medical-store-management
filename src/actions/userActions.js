import { USER_LOGIN_REQUEST, LOGOUT, USER_REQUEST } from 'constants/constants'

export const login = (username, password) => async (dispatch) => {
  const data = { username, password }

  dispatch({
    type: USER_LOGIN_REQUEST,
    payload: data,
  })

  localStorage.setItem('userInfo', JSON.stringify(data))
}

export const checkUser = () => async (dispatch, getState) => {
  const {
    userLogin: { userInfo },
  } = getState()

  dispatch({
    type: USER_REQUEST,
    payload: userInfo,
  })
}
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({
    type: LOGOUT,
  })
}
