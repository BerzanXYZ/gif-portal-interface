import tailt from 'tailt'

// Page component is for wrapping everything
export const Page = tailt.div`
    flex flex-col
    min-h-screen
    bg-zinc-800 text-white
`

// Main component represents HTML main element
export const Main = tailt.main`
    flex flex-col sm:flex-row
    flex-1
`

// Header component represents HTML header element
export const Header = tailt.header`
    sticky top-0 z-30
    flex items-center justify-between
    h-16 px-8
    border-b border-b-zinc-700
    bg-zinc-900 text-white
`

// Footer component represents HTML footer element
export const Footer = tailt.footer`
    flex items-center justify-center
    px-4 py-4
    border-t border-t-zinc-700
    bg-zinc-900 text-white
`