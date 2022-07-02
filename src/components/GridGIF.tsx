import tailt from 'tailt'
import { useGifListContext } from '../contexts/GifLinkContextProvider'
import { useWalletContext } from '../contexts/WalletContextProvider'

export const GridGif = () => {
    const { publicKey } = useWalletContext()
    const { gifList } = useGifListContext()

    return (
        <Div>
            <Title>GIF Posts</Title>
            {publicKey ?
                gifList[0] ? <Grid>{gifList.map((gif, i) => <Item key={i+100} src={gif}/>)}</Grid> : <Info>Let's share some GIFs...</Info>
                :
                <Info>Connect your wallet to see posts...</Info>
            }
        </Div>
    )
}

const Div = tailt.div`
    max-h-[calc(100vh-8rem)] w-full
    overflow-y-auto
`

const Title = tailt.h2`
    sticky top-0
    font-semibold text-3xl text-center
    py-3
    border-b border-b-zinc-700
    bg-zinc-900 shadow-[0_0_1rem_black]
`

const Grid = tailt.div`
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    w-full p-3 gap-4
`

const Item = ({ src } : { src: string }) => (
    <img className='rounded-xl' width='100%' height='auto' alt='gif' src={src}/>
)

const Info = tailt.p`
    font-medium text-lg text-center
    opacity-70
    pt-4
`