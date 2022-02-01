import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { Box, Typography, TextField } from '@mui/material'
import { CreateOrderWrapper, Btn } from './CreateOrderStyles'

import { createOrder } from 'actions/orderActions'

const style = {
  borderRadius: '10px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const CreateOrder = () => {
  const [medicineName, setMedicineName] = React.useState('')
  const [customerName, setCustomerName] = React.useState('')
  const [customerContact, setCustomerContact] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)

  const dispatch = useDispatch()
  const id = uuidv4()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      createOrder(id, medicineName, customerName, customerContact, quantity)
    )
    setMedicineName('')
    setCustomerName('')
    setCustomerContact('')
    setQuantity('')
    alert('Order Created Successfully')
  }

  return (
    <CreateOrderWrapper>
      <Box sx={style}>
        <Typography
          id="transition-modal-title"
          variant="h4"
          component="h2"
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Create Order
        </Typography>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box
              sx={{
                '& > :not(style)': {
                  m: 1,
                  width: '100%',
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onChange={(e) => setMedicineName(e.target.value)}
                label="Name of Medicine"
                variant="outlined"
                value={medicineName}
              />
              <TextField
                onChange={(e) => setCustomerName(e.target.value)}
                label="Customer Name"
                variant="outlined"
                value={customerName}
              />
              <TextField
                onChange={(e) => setCustomerContact(e.target.value)}
                label="Customer Contact"
                variant="outlined"
                value={customerContact}
              />
              <TextField
                onChange={(e) => setQuantity(e.target.value)}
                label="Quantity"
                variant="outlined"
                type="number"
                value={quantity}
              />
            </Box>
            <div style={{ textAlign: 'center' }}>
              <Btn type="submit">Create</Btn>
            </div>
          </form>
        </div>
      </Box>
    </CreateOrderWrapper>
  )
}
