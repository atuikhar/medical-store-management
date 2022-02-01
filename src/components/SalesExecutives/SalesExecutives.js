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
  Stack,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import {
  Wrapper,
  Nav,
  Btn,
  Title,
  Text,
  DeleteIcon,
  EditIcon,
} from './SalesExecutivesStyles'
import {
  getExecutives,
  addToExecutives,
  updateExecutives,
} from 'actions/executivesActions'

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

export const SalesExecutives = () => {
  const [open, setOpen] = React.useState(false)
  const [openUpdate, setOpenUpdate] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const openUpdateForm = () => setOpenUpdate(true)
  const closeUpdateForm = () => setOpenUpdate(false)
  const [dob, setDob] = React.useState('01-18-2022')

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [experience, setExperience] = React.useState('')
  const [updateId, setUpdateId] = React.useState('')

  const dispatch = useDispatch()

  const executives = useSelector((state) => state.executives)

  const { list } = executives

  const id = uuidv4()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addToExecutives(id, firstName, lastName, dob, gender, experience))

    setFirstName('')
    setLastName('')
    setDob('')
    setGender('')
    setExperience('')
    setOpen(false)
    dispatch(getExecutives())
  }

  const editForm = (e, l) => {
    e.preventDefault()
    setUpdateId(l.id)
    openUpdateForm(true)
    setFirstName(l.firstname)
    setLastName(l.lastname)
    setDob(l.dob)
    setGender(l.gender)
    setExperience(l.experience)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(
      updateExecutives(updateId, firstName, lastName, dob, gender, experience)
    )
    setFirstName('')
    setLastName('')
    setDob('')
    setGender('')
    setExperience('')
    dispatch(getExecutives())
    closeUpdateForm(false)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    const currLocalStorage = JSON.parse(localStorage.getItem('executivesList'))

    const newLocalStorage = currLocalStorage.filter((item) => item.id !== id)

    localStorage.setItem('executivesList', JSON.stringify([...newLocalStorage]))
    dispatch(getExecutives())
  }

  const handleChange = (newValue) => {
    const val = newValue.toString().split(' ')

    const [, m, d, y] = val

    const newVal = [m, d, y].join(' ')

    setDob(newVal)
  }
  React.useEffect(() => {
    dispatch(getExecutives())
  }, [dispatch])

  return (
    <Wrapper>
      <h1>Sales Executives</h1>
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
                  Add Executives
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
                        onChange={(e) => setFirstName(e.target.value)}
                        label="First Name"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setLastName(e.target.value)}
                        label="Last Name"
                        variant="outlined"
                      />
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="DOB"
                            inputFormat="MM/dd/yyyy"
                            value={dob}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                      <TextField
                        onChange={(e) => setGender(e.target.value)}
                        label="Gender"
                        variant="outlined"
                      />
                      <TextField
                        onChange={(e) => setExperience(e.target.value)}
                        label="Experience"
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
      <Nav>
        <TableContainer component={Paper}>
          <Table size="large" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Title>FirstName</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>LastName</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>DOB</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Gender</Title>
                </TableCell>
                <TableCell align="right">
                  <Title>Experience(Yrs)</Title>
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
                    <Text>{l.firstname}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.lastname}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.dob}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.gender}</Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text>{l.experience}</Text>
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
                                      setFirstName(e.target.value)
                                    }
                                    label="First Name"
                                    variant="outlined"
                                    value={firstName}
                                  />
                                  <TextField
                                    onChange={(e) =>
                                      setLastName(e.target.value)
                                    }
                                    label="Last Name"
                                    variant="outlined"
                                    value={lastName}
                                  />
                                  <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                  >
                                    <Stack spacing={3}>
                                      <DesktopDatePicker
                                        label="DOB"
                                        inputFormat="MM/dd/yyyy"
                                        value={dob}
                                        onChange={handleChange}
                                        renderInput={(params) => (
                                          <TextField {...params} />
                                        )}
                                      />
                                    </Stack>
                                  </LocalizationProvider>
                                  <TextField
                                    onChange={(e) => setGender(e.target.value)}
                                    label="Gender"
                                    variant="outlined"
                                    value={gender}
                                  />
                                  <TextField
                                    onChange={(e) =>
                                      setExperience(e.target.value)
                                    }
                                    label="Experience"
                                    variant="outlined"
                                    value={experience}
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
      </Nav>
    </Wrapper>
  )
}
