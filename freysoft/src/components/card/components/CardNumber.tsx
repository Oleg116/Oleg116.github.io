import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function CardNumber({ isActive }: { isActive: boolean }) {
  const cardNumber = [2544, 7545, 3785, 1023]
  return (
    <Box sx={{ display: 'flex', gap: '16px' }}>
      {cardNumber.map((elem: number) => <Typography key={elem} sx={{
        transition: '0.7s',
        transitionDelay: isActive ? '0.7s' : '0s',
        transitionProperty: 'color',
        color: isActive ? '#A3A3A3' : '#2F3046',
        fontSize: '18px',
        fontFamily: 'DM Sans',
        fontWeight: 500
      }}>{elem}</Typography>)
      }
    </Box >
  )
}