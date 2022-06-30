import tailt from 'tailt'
import { useWalletContext } from '../contexts/WalletContextProvider'

export const ButtonWallet = () => {
    const { connect, publicKey } = useWalletContext()
    return (
        <Button onClick={connect} disabled={!!publicKey}>
            {publicKey ? 'Connected' : 'Connect'}
        </Button>
    )
}

const Button = tailt.button`
    h-10 px-5
    rounded-xl
    hover:scale-95 active:scale-100
    bg-green-600 hover:bg-green-500
    disabled:bg-zinc-700 disabled:hover:bg-zinc-700
    disabled:cursor-not-allowed
    duration-200
    font-semibold
`