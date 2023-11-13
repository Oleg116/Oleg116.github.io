import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'
import Header from '../header'

export default function Wrapper({ children, header }: { children: ReactElement, header: string }) {
    return (
        <Box>
            {children}
        </Box >
    )
} 