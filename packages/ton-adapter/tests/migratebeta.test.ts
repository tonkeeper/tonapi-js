import {
    Address,
    Contract,
    ContractProvider,
    OpenedContract,
    TonClient,
    internal,
    ContractState
} from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey, KeyPair } from '@ton/crypto';
import { ContractAdapter } from '../src/tonapi-adapter';
import { Api, TonApiClient } from '@ton-api/client';

const httpClient = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'your-api-key',
});

class NftItem implements Contract {
    constructor(public readonly address: Address) {}

    static createFromAddress(address: Address) {
        return new NftItem(address);
    }

    async getData(provider: ContractProvider) {
        return await provider.get('get_public_key', []);
    }

    async getTransactions(provider: ContractProvider) {
        const state = await provider.getState();
        const last = state.last!;

        return await provider.getTransactions(this.address, last.lt, last.hash, 10);
    }
}

// Initialize the ton API client
const client = new Api(httpClient);

// Create an adapter
const contractAdapter = new ContractAdapter(client);
let keyPair: KeyPair;
let contract: OpenedContract<NftItem>;

beforeAll(async () => {
    // Create wallet contract
    const mnemonics = await mnemonicNew();
    const workchain = 0;

    keyPair = await mnemonicToPrivateKey(mnemonics);
    // const customPublickKey = 'bada76699b7e8417300355f5c355dff83a96c5c9cd43df0dd9bc23c72e78bc0e';
    // const buffer = Buffer.from(customPublickKey, 'hex');
    const wallet = NftItem.createFromAddress(
        Address.parse('UQAs87W4yJHlF8mt29ocA4agnMrLsOP69jC1HPyBUjJay7Mg')
    );
    contract = contractAdapter.open(wallet);
});

// Use tonapi adapter to work with any @ton/ton smart-contracts wrappers

test('Wallet contract', async () => {
    // Get balance
    // const balance: bigint = await contract.getBalance();
    // expect(balance).toBe(0n);
    // expect(typeof balance === 'bigint').toBe(true);

    // get transactions
    const data = await contract.getData();
    // console.log(data);

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
