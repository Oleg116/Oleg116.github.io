import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import LabelBottomNavigation from './components/footer'
import Wrapper from './components/wrapper'

export default function Root() {
    const [tab, setTab] = useState('home')
    return (
        <Wrapper header={tab}>
            <BrowserRouter>
                <Routes>
                    <Route index path='/home' element={<Box>2</Box>} />
                    <Route path="Expenses" element={<Box>3</Box>} />
                    <Route path="*" element={<Box>404</Box>} />
                </Routes>
                <LabelBottomNavigation tabValue={tab} setTabValue={setTab} />
            </BrowserRouter>
        </Wrapper>
    )
}
