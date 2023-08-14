import React, { useState } from 'react'

import { Box } from '@mui/material'
import CardComponent from './components/CardComponent'

export default function Card() {
  const [spends] = useState([])
  return (
    <Box sx={{ width: '100%' }}>
      <CardComponent />
    </Box>
  )
}