import { TonClient, WalletContractV4, internal } from "@ton/ton";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";
import { ContractAdapter } from "../src/tonapi-adapter";
import { Api, HttpClient } from "@ton-api/client";

const httpClient = new HttpClient({
    baseUrl: 'https://tonapi.io',
});

// Initialize the ton API client
const client = new Api(httpClient);

// Create an adapter 
const adapter = new ContractAdapter(client);


// Create wallet contract
const mnemonics = await mnemonicNew();
const keyPair = await mnemonicToPrivateKey(mnemonics);
const workchain = 0;
const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });

// Use tonapi adapter to work with any @ton/ton smart-contracts wrappers
const contract = adapter.open(wallet);

test('Wallet contract', async () => {
    // Get balance
    const balance: bigint = await contract.getBalance();

    // Create a transfer
    const seqno: number = await contract.getSeqno();
    await contract.sendTransfer({
        seqno,
        secretKey: keyPair.secretKey,
        messages: [internal({
            value: '0.001',
            to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
            body: 'Hello world',
        })]
    });
});