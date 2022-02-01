import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Theme from './styles/Theme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
