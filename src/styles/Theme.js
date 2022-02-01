import { ThemeProvider } from 'styled-components'

import GlobalTheme from './GlobalTheme'
import GlobalStyles from './GlobalStyle'

const Theme = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
