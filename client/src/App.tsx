import { ThemeProvider } from '@emotion/react'
import './App.css'
import BooksPage from './components/modules/BooksPage'
import { CssBaseline, createTheme } from '@mui/material'


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <BooksPage/>
      </ThemeProvider>
    </>
  )
}

export default App
