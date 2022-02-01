import { Container, Grid } from '@mui/material'

const Form = ({ children }) => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid sx={{ textAlign: 'center' }}>
        <Grid item xs={12} md={12} style={{ margin: 50 }}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
