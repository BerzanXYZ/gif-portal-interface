import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { readGifList } from "../utils/solana"
import { useWalletContext } from "./WalletContextProvider"

interface GifListState {
    gifList: string[]
    updateGifList(): Promise<void>
}

const GifListContext = createContext<GifListState>({} as GifListState)

export function useGifListContext() {
    return useContext(GifListContext)
}

export const GifListContextProvider = ({ children }: { children: ReactNode }) => {
    const [gifList, setGifList] = useState([] as string[])
    const { publicKey } = useWalletContext()

    async function updateGifList () {
        const gifListFromProgram = await readGifList()
        setGifList( gifListFromProgram )
    }

    // Update the GIF list when a wallet connects
    useEffect(() => {
        if(publicKey) updateGifList()
    }, [publicKey])

    return (
        <GifListContext.Provider value={{ gifList, updateGifList }}>{children}</GifListContext.Provider>
    )

}