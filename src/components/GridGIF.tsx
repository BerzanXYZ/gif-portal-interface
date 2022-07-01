import tailt from 'tailt'
import { useWalletContext } from '../contexts/WalletContextProvider'

export const GridGif = ({ gifList }: { gifList: string[] }) => {
    const { publicKey } = useWalletContext()

    return (
        <Div>
            {publicKey && <Grid>{gifList.map((gif, i) => <Item key={i+100} src={gif}/>)}</Grid>}
        </Div>
    )
}

const Div = tailt.div`
    max-h-[calc(100vh-8rem)]
    overflow-y-auto
`

const Grid = tailt.div`
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    w-full p-3 gap-4
`

const Item = ({ src } : { src: string }) => (
    <img className='rounded-xl' width='100%' height='auto' alt='gif' src={src}/>
)