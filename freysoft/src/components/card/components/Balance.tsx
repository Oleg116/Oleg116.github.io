import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

export default function Balance() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '21px',
        textAlign: 'left',
        color: '#fff'
      }}>Total Balance</Typography>
      <Typography sx={{
        color: '#FFF',
        fontSize: '30px',
        fontFamily: 'Roboto',
        fontWeight: 700,
        textAlign: 'left',
      }}>$76,22.00</Typography>
    </Box >
  )
}