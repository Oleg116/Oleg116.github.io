import React, { useState } from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Balance from './Balance'
import CardNumber from './CardNumber'
import masterCard from '../../assets/mastercardLogo.svg'

const boxStyles = {
  padding: '20px 30px 23px 30px',
  height: '190px',
  backgroundColor: '#2F3046',
  borderRadius: '24px',
  position: 'relative',
  transition: '1.4s',
}

export default function Card() {

  const [isCVCSide, setCVCSide] = useState(false);

  return (
    <Box sx={{ position: 'fixed', width: 'calc(100% - 16px)', top: '60px', left: '0', p: 1 }}>
      <Box
        sx={{ ...boxStyles, transform: `rotateY(${isCVCSide ? 180 : 0}deg)` }} onClick={() => setCVCSide(!isCVCSide)}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Box sx={{
            display: 'flex',
          }}>
            <Box sx={{
              transition: '0.7s',
              transitionDelay: isCVCSide ? '0s' : '0.7s',
              transitionProperty: 'background-color',
              backgroundColor: isCVCSide ? '#2F3046' : '#fff',
              width: '4px',
              height: '4px',
              mr: '5px',
              borderRadius: '50%'
            }} />
            <Box sx={{
              transition: '0.7s',
              transitionDelay: isCVCSide ? '0s' : '0.7s',
              transitionProperty: 'background-color',
              backgroundColor: isCVCSide ? '#2F3046' : '#fff',
              width: '4px',
              height: '4px',
              mr: '5px',
              borderRadius: '50%'
            }} />
            <Box sx={{
              transition: '0.7s',
              transitionDelay: isCVCSide ? '0s' : '0.7s',
              transitionProperty: 'background-color',
              backgroundColor: isCVCSide ? '#2F3046' : '#fff',
              width: '4px',
              height: '4px',
              borderRadius: '50%'
            }} />
          </Box>
        </Box>
        <Balance isActive={!isCVCSide} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: '23px',
          width: 'calc(100% - 60px)'
        }}>
          <CardNumber isActive={!isCVCSide} />
          <Box sx={{
            transition: '0.7s',
            transitionDelay: isCVCSide ? '0s' : '0.7s',
            transitionProperty: 'background-color',
            backgroundColor: `rgba(	47,	48,	70, ${isCVCSide ? '1' : '0'})`,
          }}>
            <img style={{ position: 'relative', zIndex: '-1' }} src={(masterCard as unknown) as string} />
          </Box>
        </Box>
        <Box sx={{
          position: 'absolute',
          width: '100px',
          height: '50px',
          bottom: 35, left: 35,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '10px',
          transition: '0.7s',
          borderRadius: '10px',
          transitionDelay: !isCVCSide ? '0s' : '0.7s',
          transitionProperty: 'background-color',
          backgroundColor: `rgba(	0,	0,	0, ${isCVCSide ? '0.6' : '0'})`,
        }}>
          <Typography sx={{
            transform: `rotateY(180deg)`,
            transition: '0.7s',
            transitionDelay: !isCVCSide ? '0s' : '0.7s',
            transitionProperty: 'color',
            color: `rgba(	255,	255,	255, ${isCVCSide ? '1' : '0'})`,
          }}>234</Typography>
        </Box>
      </ Box>
    </Box>
  )
}