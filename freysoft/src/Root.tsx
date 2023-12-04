import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import LabelBottomNavigation from './components/footer'
import Card from './components/card'
import Expenses from './components/expenses'
import Header from './components/header'

export default function Root() {
    const location = window.location.pathname.substring(1)

    const [tab, setTab] = useState(location || 'Home')
    return (
        <Box sx={{ fontFamily: 'DM Sans', width: '100vw', height: '100vh', overflow: 'auto' }}>
            <Header header={tab || 'Home'} />
            <Box sx={{ padding: '0 15px' }}>
                <BrowserRouter>
                    <Routes>
                        <Route index path='' element={<Card />} />
                        <Route path="Expenses" element={<Expenses />} />
                        <Route path="*" element={<Box>404</Box>} />
                    </Routes>
                    <LabelBottomNavigation tabValue={tab} setTabValue={setTab} />
                </BrowserRouter>
            </Box>
        </Box >
    )
}
