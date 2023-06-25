import React, { CSSProperties } from 'react'
import Box from '@mui/system/Box'
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Box >
        <img src={(avatar as unknown) as string} />
      </Box>
      <Typography style={fontStyles}>{header}</Typography>
      <NotificationsOutlinedIcon />
    </Box >
  )
}