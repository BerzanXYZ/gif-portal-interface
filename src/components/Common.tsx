import tailt from 'tailt'

// Page component is for wrapping everything
export const Page = tailt.div`
    flex flex-col items-center
    min-h-screen
    bg-zinc-700 text-white
`

// Main component represents HTML main element
export const Main = tailt.main`
    flex flex-col
    flex-1 w-full max-w-6xl px-4
`

// Header component represents HTML header element
export const Header = tailt.header`
    sticky top-0 z-30
    flex items-center justify-between
    w-full h-16 px-8
    bg-zinc-800 text-white
`

// Footer component represents HTML footer element
export const Footer = tailt.footer`
    flex items-center justify-center
    w-full max-w-6xl px-4 py-4
    bg-zinc-800 text-white
`