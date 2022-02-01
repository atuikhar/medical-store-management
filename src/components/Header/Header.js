import React from 'react'
import { useDispatch } from 'react-redux'
import { NavWrapper, Nav, LogoIcon, LogOut } from './HeaderStyles'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from 'actions/userActions'

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <NavWrapper>
      <Nav>
        <LogoIcon onClick={logOutHandler} />
        <Link to="/">
          <LogOut />
        </Link>
      </Nav>
    </NavWrapper>
  )
}
