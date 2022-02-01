import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { OrderWrapper, Nav, Title, DeleteIcon, Text } from './OrderStyles'
import { getOrderList } from 'actions/orderActions'

export const Order = () => {
  const dispatch = useDispatch()
  const allOrder = useSelector((state) => state.allOrder)

  const { list } = allOrder

  const handleDelete = (e, id) => {
    e.preventDefault()
    const currLocalStorage = JSON.parse(localStorage.getItem('orderList'))

    const newLocalStorage = currLocalStorage.filter((item) => item.id !== id)

    localStorage.setItem('orderList', JSON.stringify([...newLocalStorage]))
    dispatch(getOrderList())
  }

  React.useEffect(() => {
    dispatch(getOrderList())
  }, [dispatch])

  return (
    <OrderWrapper>
      <h1>CreateOrder</h1>
      <Nav>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Title>Name of Medicine</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>CustomerName</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Contact</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Quantity</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Delete</Title>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((l, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Text>{l.name}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.customername}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.contact}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.quantity}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <DeleteIcon onClick={(e) => handleDelete(e, l.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Nav>
    </OrderWrapper>
  )
}
