import { Global, ThemeProvider } from '@emotion/react'

import Home from './pages/Home'
import globalStyle from './styles/globalStyle.js'
import { Theme } from './styles/theme.js'

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={globalStyle} />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
