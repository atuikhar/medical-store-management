import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  addToInventoryReducer,
  getListReducer,
  updateInventoryReducer,
} from 'reducers/itemReducers'
import {
  addToExecutivesReducer,
  getExecutivesListReducer,
  updateExecutivesReducer,
} from 'reducers/executivesReducers'
import { userLoginReducer, checkUseReducer } from 'reducers/userReducer'

import { getOrderListReducer, createOrderReducer } from 'reducers/orderReducers'

const reducer = combineReducers({
  inventory: getListReducer,
  addInventory: addToInventoryReducer,
  updateInventory: updateInventoryReducer,
  executives: getExecutivesListReducer,
  addExecutives: addToExecutivesReducer,
  updateExecutives: updateExecutivesReducer,
  allOrder: getOrderListReducer,
  orderCreate: createOrderReducer,
  userLogin: userLoginReducer,
  checkUserDetails: checkUseReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
