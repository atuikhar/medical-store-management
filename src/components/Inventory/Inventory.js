import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
} from '@mui/material'
import {
  InventoryWrapper,
  InventoryNav,
  Btn,
  Title,
  Text,
  DeleteIcon,
  EditIcon,
} from './InventoryStyles'
import { getList, addToInventory, updateInvetory } from 'actions/itemActions'

const style = {
  position: 'absolute',
  borderRadius: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const Inventory = () => {
  const [open, setOpen] = React.useState(false)
  const [openUpdate, setOpenUpdate] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const openUpdateForm = () => setOpenUpdate(true)
  const closeUpdateForm = () => setOpenUpdate(false)

  const [medicineName, setMedicineName] = React.useState('')
  const [manufacturer, setManufacturer] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [stock, setStock] = React.useState('')
  const [discount, setDiscount] = React.useState('')
  const [updateId, setUpdateId] = React.useState('')

  const dispatch = useDispatch()

  const inventory = useSelector((state) => state.inventory)

  const { list } = inventory

  const id = uuidv4()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addToInventory(id, medicineName, manufacturer, price, stock, discount)
    )
    setMedicineName('')
    setManufacturer('')
    setPrice('')
    setStock('')
    setDiscount('')
    setOpen(false)
    dispatch(getList())
  }

  const editForm = (e, l) => {
    e.preventDefault()
    setUpdateId(l.id)
    openUpdateForm(true)
    setMedicineName(l.name)
    setManufacturer(l.manufacturer)
    setPrice(l.price)
    setStock(l.stock)
    setDiscount(l.discount)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(
      updateInvetory(
        updateId,
        medicineName,
        manufacturer,
        price,
        stock,
        discount
      )
    )
    setMedicineName('')
    setManufacturer('')
    setPrice('')
    setStock('')
    setDiscount('')
    dispatch(getList())
    closeUpdateForm(false)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    const currLocalStorage = JSON.parse(localStorage.getItem('inventoryList'))

    const newLocalStorage = currLocalStorage.filter((item) => item.id !== id)

    localStorage.setItem('inventoryList', JSON.stringify([...newLocalStorage]))
    dispatch(getList())
  }

  React.useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  return (
    <InventoryWrapper>
      <h1>Inventory</h1>
      <div>
        <div>
          <Btn onClick={handleOpen}>Add</Btn>
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{ textAlign: 'center', marginBottom: '20px' }}
                >
                  Add Medicine Details
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
                      />
                      <TextField
                        onChange={(e) => setManufacturer(e.target.value)}
                        label="Manufacturer"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setPrice(e.target.value)}
                        label="Price"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setStock(e.target.value)}
                        label="Stock"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setDiscount(e.target.value)}
                        label="Discount"
                        variant="outlined"
                      />
                    </Box>
                    <div style={{ textAlign: 'center' }}>
                      <Btn type="submit">Add</Btn>
                    </div>
                  </form>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
      <InventoryNav>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Title>Name of Medicine</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Manufacturer</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Price</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Stock</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Discount</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Delete</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Edit</Title>
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
                    <Text>{l.manufacturer}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.price}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.stock}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.discount}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <DeleteIcon onClick={(e) => handleDelete(e, l.id)} />
                  </TableCell>
                  <TableCell align="right">
                    <div>
                      <EditIcon onClick={(e) => editForm(e, l)} />
                      <Modal
                        open={openUpdate}
                        onClose={closeUpdateForm}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={openUpdate}>
                          <Box sx={style}>
                            <Typography
                              id="transition-modal-title"
                              variant="h4"
                              component="h2"
                              sx={{ textAlign: 'center', marginBottom: '20px' }}
                            >
                              Update
                            </Typography>
                            <div>
                              <form onSubmit={(e) => handleUpdate(e)}>
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
                                    onChange={(e) =>
                                      setMedicineName(e.target.value)
                                    }
                                    label="Name of Medicine"
                                    variant="outlined"
                                    value={medicineName}
                                  />
                                  <TextField
                                    onChange={(e) =>
                                      setManufacturer(e.target.value)
                                    }
                                    label="Manufacturer"
                                    variant="outlined"
                                    value={manufacturer}
                                  />
                                  <TextField
                                    onChange={(e) => setPrice(e.target.value)}
                                    label="Price"
                                    variant="outlined"
                                    value={price}
                                  />
                                  <TextField
                                    onChange={(e) => setStock(e.target.value)}
                                    label="Stock"
                                    variant="outlined"
                                    value={stock}
                                  />
                                  <TextField
                                    onChange={(e) =>
                                      setDiscount(e.target.value)
                                    }
                                    label="Discount"
                                    variant="outlined"
                                    value={discount}
                                  />
                                </Box>
                                <div style={{ textAlign: 'center' }}>
                                  <Btn type="submit">Update</Btn>
                                </div>
                              </form>
                            </div>
                          </Box>
                        </Fade>
                      </Modal>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InventoryNav>
    </InventoryWrapper>
  )
}
