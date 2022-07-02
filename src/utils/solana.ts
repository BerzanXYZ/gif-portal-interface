import { Connection, PublicKey, clusterApiUrl, Commitment, ConfirmOptions, Keypair, SystemProgram } from '@solana/web3.js';
import { AnchorProvider, Idl, Program } from '@project-serum/anchor';
import idl from '../idl/idl.json';

export function createKeypair(): Keypair {
    return Keypair.generate()
}

export function getProgramId(): PublicKey {
    return new PublicKey(idl.metadata.address)
}

export function getProvider(): AnchorProvider {
    const connection = new Connection(clusterApiUrl('devnet'), 'processed' as Commitment)
    const provider = new AnchorProvider(connection, (window as any).solana, 'processed' as ConfirmOptions)
    return provider
}

// Read Base Account from localStorage, or create a new one, then save it to localStorage
export function readBaseAccount() {
    const stringArray = localStorage.getItem('baseAccountSecretKey')
    if(stringArray) {
        const intArray = stringArray?.split(',').map(n => parseInt(n))
        const u8Array = new Uint8Array(intArray as number[])
        const localKeypair = Keypair.fromSecretKey(u8Array)
        return localKeypair
    } else {
        const keypair = createKeypair()
        localStorage.setItem('baseAccountSecretKey', keypair.secretKey.toString())
        return keypair
    }
}

// Returns true or false based on initialization in the past
export function getIsInitialized() {
    return localStorage.getItem('isInitialized') as unknown as boolean || false
}

// Init baseAccount if it isn't already
export async function initBaseAccount() {
    if( getIsInitialized() ) return

    const baseAccount = readBaseAccount()
    const provider = getProvider()
    const program = new Program(idl as Idl, getProgramId(), provider)

    alert("You have to initialize your account for once!")

    const txId = await program.rpc.initialize({
        accounts: {
            baseAccount: baseAccount.publicKey,
            payer: provider.wallet.publicKey,
            systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
    })

    localStorage.setItem('isInitialized', 'true')
    console.log("Base account is successfully initialized!\nTx:", `https://explorer.solana.com/tx/${txId}`);
    
}

// Reads gif list of baseAccount from
export async function readGifList() {
    const baseAccount = readBaseAccount()
    const provider = getProvider()
    const program = new Program(idl as Idl, getProgramId(), provider)

    // Fetch program account
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey)
    // Return gif lis
    const gifUrls = (account.gifList as { gifLink: string }[]).map(o => o.gifLink)
    return gifUrls
}

// Send a gif to blockchain
export async function sendGif(url: string) {
    // Check if url is valid
    url = url.includes('https://') ? url : 'https://' + url
    try {
        if(!(await fetch(url)).ok) {
            alert("GIF link is not valid!")
            return
        }
    } catch (e) {
        alert("GIF link is not valid!")
        return
    }

    const baseAccount = readBaseAccount()
    const provider = getProvider()
    const program = new Program(idl as Idl, getProgramId(), provider)

    // Send GIF url to program
    const txId = await program.rpc.addGif(url, {
        accounts: {
            baseAccount: baseAccount.publicKey,
            payer: provider.wallet.publicKey,
        }
    })

    console.log("Successfully sent GIF to blockchain!\nTx:", `https://explorer.solana.com/tx/${txId}`);
}