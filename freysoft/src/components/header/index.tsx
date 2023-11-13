import React, { CSSProperties } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import avatar from '../assets/avatar.svg'

const fontStyles: CSSProperties = {
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '28px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#000',
}

export default function Header({ header }: { header: string }) {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      position: 'fixed',
      top: '0px',
      background: '#fff',
      zIndex: 2,
      borderBottom: '1px solid #c9c7c7',
      boxShadow: ' 0px -2px 10px -2px #000000bf'

    }}>
      <Box sx={{ p: 0.5 }}>
        <img src={(avatar as unknown) as string} />
      </Box>
      <Typography style={fontStyles}>{header}</Typography>
      <NotificationsOutlinedIcon sx={{ marginRight: '15px' }} />
    </Box >
  )
}