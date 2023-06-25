import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function CardNumber() {
  const cardNumber = [2544, 7545, 3785, 1023]
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      {cardNumber.map((elem: number) => <Typography key={elem} sx={{
        color: '#A3A3A3',
        fontSize: '18px',
        fontFamily: 'Roboto',
        fontWeight: 500
      }}>{elem}</Typography>)
      }
    </Box >
  )
}