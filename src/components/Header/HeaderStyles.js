import { Container } from '@mui/material'
import styled from 'styled-components'
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy'
import LogoutIcon from '@mui/icons-material/Logout'

export const NavWrapper = styled(Container)``

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`

export const LogoIcon = styled(LocalPharmacyIcon)`
  font-size: 50px;
  cursor: pointer;
`

export const LogOut = styled(LogoutIcon)`
  font-size: 50px;
  cursor: pointer;
`
