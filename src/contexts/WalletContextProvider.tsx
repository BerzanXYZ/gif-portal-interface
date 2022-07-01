import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface WalletContextState {
    publicKey: string,
    connect(): void,
}

const WalletContext = createContext<WalletContextState>({} as WalletContextState)

export function useWalletContext() {
    return useContext(WalletContext)
}

export const WalletContextProvider = ({children}: {children: ReactNode}) => {
    // PublicKey of the connected Phantom wallet
    const [publicKey, setPublicKey] = useState<string>('')
    const [isConnected, setConnected] = useState<boolean>(false)

    // Connect function to connect Phantom wallet
    const connect = async () => {
        const { solana } = window as any

        if(!solana && !solana?.isPhantom) return

        await solana.connect()
        console.log("connected");
        setConnected(true)
        
    }

    // When Phantom wallet is connected, get public key
    useEffect(() => {
        async function getPublicKey() {
            const { solana } = window as any

            if(!solana && !solana?.isPhantom) return

            const res = await solana.connect()
            setPublicKey( res.publicKey.toString() )
        }
        if(isConnected) getPublicKey()
    }, [isConnected])

    // If Phantom wallet is connected when page gets loaded
    // automatically connect to Phantom wallet
    useEffect(() => {
        async function autoConnect() {
            const { solana } = window as any

            if(!solana && !solana?.isPhantom) return
            
            await solana.connect({ onlyIfTrusted: true })
            setConnected(true)
        }
        autoConnect()
    }, [])


    return (
        <WalletContext.Provider value={{ publicKey, connect }}>{children}</WalletContext.Provider>
    )
}