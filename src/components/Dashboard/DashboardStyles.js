import styled from 'styled-components'
import { Inventory, People, Create, MedicalServices } from '@mui/icons-material'

export const DashboardWrapper = styled.div``

export const StorageIcon = styled(Inventory)`
  font-size: 30px;
`

export const ExecutivesIcon = styled(People)`
  font-size: 30px;
`
export const CreateOrderIcon = styled(Create)`
  font-size: 30px;
`

export const OrderIcon = styled(MedicalServices)`
  font-size: 30px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 90%;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;

  &:focus {
    transform: scale(1.1);
    color: #fa4549;
    background: rgba(245, 151, 148, 0.3);
  }
`

export const LeftNav = styled.div`
  display: block;
  text-align: center;
`
