import { Connection, PublicKey, clusterApiUrl, Commitment, ConfirmOptions, Keypair } from '@solana/web3.js';
import { AnchorProvider } from '@project-serum/anchor';
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