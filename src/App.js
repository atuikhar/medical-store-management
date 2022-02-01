import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Dashboard } from 'components/Dashboard/Dashboard'
import { ErrorPage } from 'components/Error/ErrorPage'
import { LoginForm } from 'screens/LoginForm'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
