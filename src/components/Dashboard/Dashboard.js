import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import {
  StorageIcon,
  ExecutivesIcon,
  CreateOrderIcon,
  OrderIcon,
  Button,
  LeftNav,
} from './DashboardStyles'
import { Inventory } from 'components/Inventory/Inventory'
import { SalesExecutives } from 'components/SalesExecutives/SalesExecutives'
import { CreateOrder } from 'components/CreateOrder/CreateOrder'
import { Order } from 'components/Order/Order'

export const Dashboard = () => {
  const [component, setComponent] = useState(<Inventory />)

  const [admin, setAdmin] = React.useState(false)

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  React.useEffect(() => {
    if (
      userInfo.username === 'test-admin' &&
      userInfo.password === 'test-admin'
    ) {
      setAdmin(true)
    }
  }, [userInfo.password, userInfo.username])

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <LeftNav>
          {admin ? (
            <>
              <Button onClick={() => setComponent(<Inventory />)}>
                <StorageIcon />
                <h3 style={{ paddingLeft: '20px' }}>Inventory</h3>
              </Button>
              <Button onClick={() => setComponent(<SalesExecutives />)}>
                <ExecutivesIcon />
                <h3 style={{ paddingLeft: '20px' }}>Sales Executives</h3>
              </Button>
            </>
          ) : null}
          <Button onClick={() => setComponent(<CreateOrder />)}>
            <CreateOrderIcon />
            <h3 style={{ paddingLeft: '20px' }}>Create Order</h3>
          </Button>
          <Button onClick={() => setComponent(<Order />)}>
            <OrderIcon />
            <h3 style={{ paddingLeft: '20px' }}>Orders</h3>
          </Button>
        </LeftNav>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        {component}
      </Grid>
    </Grid>
  )
}
