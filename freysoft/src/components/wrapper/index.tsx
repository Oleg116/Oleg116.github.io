import React, { ReactElement } from 'react'

export default function Wrapper({ children, header }: { children: ReactElement, header: string }) {
    return (
        <div>
            <div>{header}</div>
            {children}
        </div>
    )
} 