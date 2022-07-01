import tailt from 'tailt'

export const GridGif = ({ gifList }: { gifList: string[] }) => {

    return (
        <Grid>
            {gifList.map((gif, i) => <Item key={i+100} src={gif}/>)}
        </Grid>
    )
}

const Grid = tailt.div`
    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
    w-full p-3 gap-4
    bg-zinc-800
`

const Item = ({ src } : { src: string }) => (
    <img className='rounded-xl' width='100%' height='auto' alt='gif' src={src}/>
)