import React, { ReactElement } from 'react'
import Box from '@mui/system/Box'
import Header from '../header'

export default function Wrapper({ children, header }: { children: ReactElement, header: string }) {
    return (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Header header={header} />
            {children}
        </Box>
    )
} 