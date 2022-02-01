import {
  GET_EXECUTIVES,
  ADD_TO_EXECUTIVES,
  UPDATE_EXECUTIVES,
} from 'constants/constants'

export const getExecutives = () => (dispatch) => {
  const data = JSON.parse(localStorage.getItem('executivesList'))

  dispatch({ type: GET_EXECUTIVES, payload: data })
}

export const addToExecutives =
  (id, firstname, lastname, dob, gender, experience) => (dispatch) => {
    const input = { id, firstname, lastname, dob, gender, experience }

    let executivesList
    if (localStorage.getItem('executivesList') === null) {
      executivesList = []
    } else {
      executivesList = JSON.parse(localStorage.getItem('executivesList'))
    }
    executivesList.push(input)
    localStorage.setItem('executivesList', JSON.stringify(executivesList))

    dispatch({ type: ADD_TO_EXECUTIVES, payload: input })
  }

export const updateExecutives =
  (id, firstname, lastname, dob, gender, experience) => (dispatch) => {
    let executivesList = JSON.parse(localStorage.getItem('executivesList'))
    let itemExist = executivesList.find((x) => x.id === id)
    if (itemExist) {
      itemExist.firstname = firstname
      itemExist.lastname = lastname
      itemExist.dob = dob
      itemExist.gender = gender
      itemExist.experience = experience

      const index = executivesList.findIndex((item) => item.id === id)

      executivesList.splice(index, 1, itemExist)
      localStorage.setItem('executivesList', JSON.stringify(executivesList))
    }

    dispatch({ type: UPDATE_EXECUTIVES, payload: itemExist })
  }
