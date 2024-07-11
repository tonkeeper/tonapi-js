import {
    Address,
    Contract,
    ContractProvider,
    OpenedContract,
    TonClient,
    WalletContractV3R2,
    WalletContractV4,
    beginCell,
    internal
} from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey, KeyPair } from '@ton/crypto';
import { ContractAdapter } from '../src/tonapi-adapter';
import { Api, TonApiClient } from '../../client/src/client';

const httpClient = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'your-api-key',
});

// Initialize the ton API client
const client = new Api(httpClient);

// Create an adapter
const adapter = new ContractAdapter(client);
let contract: OpenedContract<WalletContractV4>;
// let keyPair: KeyPair;

// class NftItem implements Contract {
//     constructor(public readonly address: Address) {}

//     static createFromAddress(address: Address) {
//         return new NftItem(address);
//     }

//     async getData(provider: ContractProvider) {
//         return await provider.get('get_public_key', []);
//     }

//     async getTransactions(provider: ContractProvider) {
//         const state = await provider.getState();
//         const last = state.last!;

//         return await provider.getTransactions(this.address, last.lt, last.hash, 10);
//     }
// }

// class WalletItem extends WalletContractV4 {
//     static async createFromAddress(address: Address) {
//         const
//         return WalletContractV4.create({ workchain: 0, publicKey: address.hash });
//     }
// }

beforeAll(async () => {
    // Create wallet contract
    // const mnemonics = await mnemonicNew();
    const workchain = 0;

    // keyPair = await mnemonicToPrivateKey(mnemonics);

    const myPublicKey =
        107945716041149716094215537459114612411409381108835456212279518821024763746199n;
    const bufferPublicKey = Buffer.from(myPublicKey.toString(16), 'hex');
    const wallet = WalletContractV4.create({ workchain, publicKey: bufferPublicKey });
    contract = adapter.open(wallet);
});

// Use tonapi adapter to work with any @ton/ton smart-contracts wrappers

test('Wallet contract 2', async () => {
    // Get balance
    const balance: bigint = await contract.getBalance();
    // console.log(balance);
    expect(balance).toBe(142406150619n);
    // expect(typeof balance === 'bigint').toBe(true);

    // Create a transfer
    // const seqno: number = await contract.getSeqno();
    // await contract.sendTransfer({
    //     seqno,
    //     secretKey: keyPair.secretKey,
    //     messages: [internal({
    //         value: '0.001',
    //         to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
    //         body: 'Hello world',
    //     })]
    // });
});

test('Wallet contract', async () => {});
