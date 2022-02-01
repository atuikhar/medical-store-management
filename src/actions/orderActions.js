import { CREATE_ORDER, GET_ORDER } from 'constants/constants'

export const getOrderList = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('orderList'))

  dispatch({ type: GET_ORDER, payload: data })
}

export const createOrder =
  (id, name, customername, contact, quantity) => (dispatch) => {
    const input = { id, name, customername, contact, quantity }

    let orderList
    if (localStorage.getItem('orderList') === null) {
      orderList = []
    } else {
      orderList = JSON.parse(localStorage.getItem('orderList'))
    }
    orderList.push(input)
    localStorage.setItem('orderList', JSON.stringify(orderList))

    dispatch({ type: CREATE_ORDER, payload: input })
  }
