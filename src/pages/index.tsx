import type { NextPage } from 'next'
import Head from 'next/head'
import { ButtonWallet } from '../components/ButtonWallet'
import { Footer, Header, Main, Page } from '../components/Common'
import { GridGif } from '../components/GridGIF'
import { SideBar } from '../components/SideBar'
import { BrandName, TextFooter, TextURL } from '../components/Text'

const Home: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>GIF Portal</title>
        <meta name="description" content="GIF Portal is a Solana dapp to share your favorite GIFs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <BrandName/>
        <ButtonWallet/>
      </Header>
      <Main>
        <SideBar/>
        <GridGif/>
      </Main>
      <Footer>
        <TextFooter>Made with ❤️ by <TextURL href='https://twitter.com/BerzanXYZ'>Berzan</TextURL></TextFooter>
      </Footer>
    </Page>
  )
}

export default Home
