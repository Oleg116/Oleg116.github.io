import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import LabelBottomNavigation from './components/LabelBottomNavigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/home' element={<Box>2</Box>} />
          <Route path="Expenses" element={<Box>3</Box>} />
          <Route path="*" element={<Box>404</Box>} />
        </Routes>
        <LabelBottomNavigation />
      </BrowserRouter>
    </div>
  )
}

export default App
