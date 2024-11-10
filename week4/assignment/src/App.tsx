import { Global, ThemeProvider } from '@emotion/react'

import Home from './pages/Home.tsx'
import globalStyle from './styles/globalStyle.ts'
import { Theme } from './styles/theme.ts'

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
