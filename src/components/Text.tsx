import { ReactNode } from 'react'
import tailt from 'tailt'

// BrandName is the brand logo on left of the Header
export const BrandName = () => (
    <h1 className='font-semibold text-2xl'>Gif Portal</h1>
)

// TextFooter is the text in the Footer
export const TextFooter = tailt.h3`
    font-semibold text-lg
`

export const TextURL = ({ children, href }: {children: string, href: string}) => (
    <span className='text-green-400'>
        <a target='blank' href={href}>{children}</a>
    </span>
)