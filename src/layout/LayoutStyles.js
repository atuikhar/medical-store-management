import styled from 'styled-components'
import { Container } from '@mui/material'

export const LayoutWrapper = styled(Container)`
  margin-top: 50px;
  min-height: 100vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
  }
`
