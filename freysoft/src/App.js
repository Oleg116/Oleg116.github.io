import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import LabelBottomNavigation from './components/footer'
import Root from './Root.tsx'

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  )
}

export default App
