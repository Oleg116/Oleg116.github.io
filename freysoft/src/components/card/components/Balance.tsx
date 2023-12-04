import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

export default function Balance({ isActive }: { isActive: boolean }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography sx={{
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '21px',
        textAlign: 'left',
        transition: '0.7s',
        transitionDelay: isActive ? '0.7s' : '0s',
        transitionProperty: 'color',
        color: isActive ? '#fff' : '#2F3046'
      }}>Total Balance</Typography>
      <Typography sx={{
        color: isActive ? '#fff' : '#2F3046',
        fontSize: '30px',
        transition: '0.7s',
        transitionDelay: isActive ? '0.7s' : '0s',
        transitionProperty: 'color',
        fontFamily: 'DM Sans',
        fontWeight: 700,
        textAlign: 'left',
      }}>$76,22.00</Typography>
    </Box >
  )
}