import React from 'react'
import '@mantine/core/styles.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core'

const myColour: MantineColorsTuple = [
  "#ebf2ff",
  "#d3e0f9",
  "#a2bef5",
  "#709af3",
  "#497bf2",
  "#3369f2",
  "#295ff3",
  "#1f4fd8",
  "#1645c2",
  "#033caa"
]

const theme = createTheme({
  colors: {
    myColour
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider 
    theme={theme} 
    defaultColorScheme="auto">
    <App />
    </MantineProvider>
  </React.StrictMode>,
)
