import { ChangeEvent, useRef, useState } from 'react'
import tailt from 'tailt'
import { useGifListContext } from '../contexts/GifLinkContextProvider'
import { useWalletContext } from '../contexts/WalletContextProvider'

export const SideBar = () => {
    const { publicKey } = useWalletContext()
    const { addGifList } = useGifListContext()

    const inputRef = useRef<HTMLInputElement>(null)

    async function sendGif() {
        if(!inputRef.current?.value) return

        alert(inputRef.current.value)
        addGifList(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <StickyDiv>
            <PubKeyDiv>
                <PubKeyLabel>Public Key: </PubKeyLabel>
                <PubKeyText>{publicKey ? publicKey.slice(0, 30) + '...' : "You didn't connect a wallet"}</PubKeyText>
            </PubKeyDiv>
            <LinkDiv>
                <LinkLabel>GIF Link :</LinkLabel>
                <LinkInput ref={inputRef} disabled={!publicKey}type='url'/>
                <LinkButton onClick={sendGif} disabled={!publicKey}>Share</LinkButton>
            </LinkDiv>
        </StickyDiv>
    )
}

const StickyDiv = tailt.div`
    sticky flex flex-col
    min-w-80 p-4 gap-y-14
    border-r border-r-zinc-700
    bg-zinc-900
`

const PubKeyDiv = tailt.div`
    flex flex-col gap-y-2
`

const PubKeyLabel = tailt.label`
    font-bold text-lg
`

const PubKeyText = tailt.p`
    font-medium text-sm
`

const LinkDiv = tailt.div`
    flex flex-col
    gap-y-4
`

const LinkLabel = tailt.label`
    font-bold text-lg
`

const LinkInput = tailt.input`
    h-10 px-3
    rounded-xl
    bg-zinc-800
    border border-zinc-700 hover:border-zinc-600 focus:border-green-600
    disabled:cursor-not-allowed outline-none duration-200
`

const LinkButton = tailt.button`
    h-10 px-4
    rounded-xl
    hover:scale-[0.98] active:scale-100
    bg-green-700 hover:bg-green-600 active:bg-green-500
    disabled:bg-zinc-700 disabled:hover:bg-zinc-700
    disabled:cursor-not-allowed duration-200
    font-semibold
`