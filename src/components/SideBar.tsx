import tailt from 'tailt'
import { useWalletContext } from '../contexts/WalletContextProvider'

export const SideBar = () => {
    const { publicKey } = useWalletContext()

    return (
        <StickyDiv>
            <PubKeyDiv>
                <PubKeyLabel>Public Key: </PubKeyLabel>
                <PubKeyText>{publicKey ? publicKey.slice(0, 30) + '...' : "You didn't connected a wallet"}</PubKeyText>
            </PubKeyDiv>
            <LinkDiv>
                <LinkLabel>GIF Link :</LinkLabel>
                <LinkInput type='url'/>
                <LinkButton>Share</LinkButton>
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
    outline-none duration-200
`

const LinkButton = tailt.button`
    h-10 px-4
    rounded-xl
    hover:scale-[0.98] active:scale-100
    bg-green-700 hover:bg-green-600 active:bg-green-500
    duration-200
    font-semibold
`