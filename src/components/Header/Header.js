import React from 'react'
import { useDispatch } from 'react-redux'
import { NavWrapper, Nav, LogoIcon, LogOut } from './HeaderStyles'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { logout } from 'actions/userActions'

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <NavWrapper>
      <Nav>
        <Link style={{ color: '#fa4549', textDecoration: 'none' }} to="/">
          <LogoIcon fontSize="large" />
        </Link>
        {location.pathname === '/home' ? (
          <LogOut
            fontSize="large"
            onClick={logOutHandler}
            style={{ color: '#fa4549' }}
          />
        ) : null}
      </Nav>
    </NavWrapper>
  )
}
