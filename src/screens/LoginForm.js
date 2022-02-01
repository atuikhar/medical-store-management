import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, checkUser } from 'actions/userActions'

export const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log(userInfo)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
    // navigate('/home')

    dispatch(checkUser())

    if (userInfo) {
      navigate('/home')
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
