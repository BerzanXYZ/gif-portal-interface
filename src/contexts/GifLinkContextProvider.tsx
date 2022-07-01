import { createContext, ReactNode, useContext, useState } from "react"

interface GifListState {
    gifList: string[]
    addGifList(gif: string): void
}

const GifListContext = createContext<GifListState>({} as GifListState)

export function useGifListContext() {
    return useContext(GifListContext)
}

export const GifListContextProvider = ({ children }: { children: ReactNode }) => {
    const [gifList, setGifList] = useState([] as string[])

    function addGifList(gif: string) {
        setGifList([gif, ...gifList])
    }

    return (
        <GifListContext.Provider value={{ gifList, addGifList }}>{children}</GifListContext.Provider>
    )

}