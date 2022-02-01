import { Header } from 'components/Header/Header'
import { LayoutWrapper } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  )
}
