import React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Balance from './Balance'
import CardNumber from './CardNumber'
import masterCard from '../../assets/mastercardLogo.svg'

export default function Card() {
  return (
    <Box sx={{ padding: '20px 30px 23px 30px', width: '90%', height: '190px', backgroundColor: '#2F3046', borderRadius: '24px', position: 'relative' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ backgroundColor: '#fff', width: '4px', height: '4px', mr: '5px', borderRadius: '50%' }} />
          <Box sx={{ backgroundColor: '#fff', width: '4px', height: '4px', mr: '5px', borderRadius: '50%' }} />
          <Box sx={{ backgroundColor: '#fff', width: '4px', height: '4px', borderRadius: '50%' }} />
        </Box>
      </Box>
      <Balance />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '23px',
        width: 'calc(100% - 60px)'
      }}>
        <CardNumber />
        <img src={(masterCard as unknown) as string} />
      </Box>
    </Box >
  )
}