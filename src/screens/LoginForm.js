import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'components/Form/Form'
import { Box, TextField, Button, Typography } from '@mui/material'
import { login } from 'actions/userActions'

export const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const checkAuth = () => {
    if (
      userInfo.username === 'test-admin' &&
      userInfo.password === 'test-admin'
    ) {
      navigate('/home')
    } else if (
      userInfo.username === 'test-sales' &&
      userInfo.password === 'test-sales'
    ) {
      navigate('/home')
    } else {
      navigate('/error')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
    setTimeout(() => {
      checkAuth()
    }, 100)
  }

  return (
    <Form>
      <Typography variant="h2">SignIn</Typography>
      <Box sx={{ minWidth: '35ch' }}>
        <form onSubmit={handleSubmit}>
          <Box style={{ marginTop: 30 }}>
            <TextField
              required
              fullWidth
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box style={{ marginTop: 30 }}>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box style={{ marginTop: 10 }}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Form>
  )
}
