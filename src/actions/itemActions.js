import {
  GET_INVENTORY,
  ADD_TO_INVENTORY,
  UPDATE_INVENTORY,
} from 'constants/constants'

export const getList = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('inventoryList'))

  dispatch({ type: GET_INVENTORY, payload: data })
}

export const addToInventory =
  (id, name, manufacturer, price, stock, discount) => (dispatch) => {
    const input = { id, name, manufacturer, price, stock, discount }

    let inventoryList
    if (localStorage.getItem('inventoryList') === null) {
      inventoryList = []
    } else {
      inventoryList = JSON.parse(localStorage.getItem('inventoryList'))
    }
    inventoryList.push(input)
    localStorage.setItem('inventoryList', JSON.stringify(inventoryList))

    dispatch({ type: ADD_TO_INVENTORY, payload: input })
  }

export const updateInvetory =
  (id, name, manufacturer, price, stock, discount) => (dispatch) => {
    let inventoryList = JSON.parse(localStorage.getItem('inventoryList'))

    let itemExist = inventoryList.find((x) => x.id === id)
    if (itemExist) {
      itemExist.name = name
      itemExist.manufacturer = manufacturer
      itemExist.price = price
      itemExist.stock = stock
      itemExist.discount = discount

      const index = inventoryList.findIndex((item) => item.id === id)

      inventoryList.splice(index, 1, itemExist)
      localStorage.setItem('inventoryList', JSON.stringify(inventoryList))
    }

    dispatch({ type: UPDATE_INVENTORY, payload: itemExist })
  }
