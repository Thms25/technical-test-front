import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import '@mantine/core/styles.css'

import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

const myColor: MantineColorsTuple = [
  '#FFF8F3',
  '#F7E7DC',
  '#758694',
  '#405D72',
  '#405D72',
  '#405D72',
  '#405D72',
  '#405D72',
  '#405D72',
  '#405D72',
]

const theme = createTheme({
  colors: {
    myColor,
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
