import { Address, Contract, ContractProvider, TupleItem } from '@ton/core';
import { WalletContractV4 } from '@ton/ton';
import { TonApiClient } from '@ton-api/client';

// Create TonApiClient instance
const tonApiClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: process.env.TONAPI_API_KEY
});

export class NftItem implements Contract {
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

export class WalletItem implements Contract {
    private walletContract: WalletContractV4;

    constructor(
        readonly address: Address,
        readonly workchain: number,
        readonly publicKey: Buffer
    ) {
        this.walletContract = WalletContractV4.create({ workchain: 0, publicKey: publicKey });
    }

    static async createFromAddress(address: Address) {
        try {
            const accountData = await tonApiClient.execGetMethodForBlockchainAccount(address, 'get_public_key');
            const workchain = address.workChain;
            const publicKey = BigInt(accountData.decoded.public_key);
            const bufferPublicKey = Buffer.from(publicKey.toString(16), 'hex');

            return new WalletItem(address, workchain, bufferPublicKey).walletContract;
        } catch (error) {
            throw new Error(`Failed to get public key: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    public getBalance(provider: ContractProvider) {
        return this.walletContract.getBalance(provider);
    }
}

export class ContractForTestNumberArgs implements Contract {
    constructor(public readonly address: Address) {}

    async getReferralItemAddr(provider: ContractProvider, args: TupleItem[]) {
        return await provider
            .get('get_referral_item_addr', args)
            .catch(err => console.log(err));
    }

    async getTransactions(provider: ContractProvider) {
        const state = await provider.getState();
        const last = state.last!;

        return await provider.getTransactions(this.address, last.lt, last.hash, 10);
    }
}
