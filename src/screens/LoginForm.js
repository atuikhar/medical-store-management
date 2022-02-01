import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Form from 'components/Form/Form'
import { Box, TextField, Button, Typography } from '@mui/material'
import { login } from 'actions/userActions'

export const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [admin, setAdmin] = React.useState(false)
  const [ex, setEx] = React.useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkAuth = () => {
    if (username === 'test-admin' && password === 'test-admin') {
      setAdmin(true)
      navigate('/home')
    } else if (username === 'test-sales' && password === 'test-sales') {
      setEx(true)
      navigate('/home')
    } else if (!admin && !ex) {
      navigate('/error')
    }
  }

  const handleSubmit = (e) => {
    const user = { username, password }
    localStorage.setItem('userInfo', JSON.stringify(user))
    checkAuth()

    dispatch(login(username, password))
  }

  return (
    <>
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
    </>
  )
}
