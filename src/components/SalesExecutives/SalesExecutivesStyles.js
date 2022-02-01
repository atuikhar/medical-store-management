import { Container } from '@mui/material'
import styled from 'styled-components'
import { Delete, Edit } from '@mui/icons-material'

export const Wrapper = styled(Container)`
  text-align: center;
`
export const Nav = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`
export const Btn = styled.button`
  border: none;
  border-radius: 5px;
  width: 20%;
  height: 40px;
  cursor: pointer;
  background: rgba(245, 151, 148, 0.3);
`

export const Title = styled.h2``
export const Text = styled.h3``

export const DeleteIcon = styled(Delete)`
  cursor: pointer;
`
export const EditIcon = styled(Edit)`
  cursor: pointer;
`
