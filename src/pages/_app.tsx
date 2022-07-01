import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletContextProvider } from '../contexts/WalletContextProvider'
import { GifListContextProvider } from '../contexts/GifLinkContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <GifListContextProvider>
        <Component {...pageProps} />
      </GifListContextProvider>
    </WalletContextProvider>
  )
}

export default MyApp
