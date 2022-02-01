import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from './layout/Layout'
import { Dashboard } from 'components/Dashboard/Dashboard'

import { LoginForm } from 'screens/LoginForm'

import { checkUser } from 'actions/userActions'

const App = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  console.log(userInfo)

  React.useEffect(() => {
    dispatch(checkUser())
  })

  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Layout>
  )
}

export default App
