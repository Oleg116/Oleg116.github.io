import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import LabelBottomNavigation from './components/LabelBottomNavigation'

function App () {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route index element={<Box>2</Box>} />
        <Route path="blogs" element={<Box>3</Box>} />
        <Route path="*" element={<Box>404</Box>} />
    </Routes>
  </BrowserRouter>
  <LabelBottomNavigation />
  </div>
  )
}

export default App
