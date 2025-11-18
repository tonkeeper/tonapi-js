import { Address, Contract, ContractProvider, OpenedContract } from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey, KeyPair } from '@ton/crypto';
import { ContractAdapter } from '@ton-api/ton-adapter';
import { TonApiClient } from '@ton-api/client';
import { test, beforeAll, expect } from 'vitest';

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

// Create TonApiClient instance
const tonApiClient = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'your-api-key',
});

// Create an adapter with explicit client
const contractAdapter = new ContractAdapter(tonApiClient);
let keyPair: KeyPair;
let contract: OpenedContract<any>;

beforeAll(async () => {
    // Create wallet contract
    const mnemonics = await mnemonicNew();

    keyPair = await mnemonicToPrivateKey(mnemonics);
    const wallet = NftItem.createFromAddress(
        Address.parse('UQAs87W4yJHlF8mt29ocA4agnMrLsOP69jC1HPyBUjJay7Mg')
    );
    contract = contractAdapter.open(wallet);
});

test.skip('NftItem contract getData', async () => {
    const data = await contract.getData();
    expect(data).toBeDefined();
});

test.skip('NftItem contract getTransactions', async () => {
    const transactions = await contract.getTransactions();
    expect(Array.isArray(transactions)).toBe(true);
});
