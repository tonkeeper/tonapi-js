import { WalletContractV5R1, internal, SendMode } from '@ton/ton';
import { mnemonicToPrivateKey } from '@ton/crypto';
import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

// Create TonApiClient instance
const tonApiClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    // apiKey: 'YOUR_API_KEY', // Optional, improves limits and access
});

// Create an adapter for interacting with contracts
const adapter = new ContractAdapter(tonApiClient);

// Convert mnemonic phrase to a private key
const mnemonics = 'word1 word2 ...'.split(' '); // Replace with your mnemonic phrase
const keyPair = await mnemonicToPrivateKey(mnemonics); // Generate key pair

// Create a wallet contract (Wallet V5R1, other versions or contract types can be used)
const wallet = WalletContractV5R1.create({ workchain: 0, publicKey: keyPair.publicKey });
const contract = adapter.open(wallet); // Open the contract using the adapter

// Retrieve the current seqno (sequence number) for the transaction
const seqno: number = await contract.getSeqno(); // Required for transaction signing

// Send a transfer
await contract.sendTransfer({
    secretKey: keyPair.secretKey, // Sign transaction with the private key
    seqno, // Use the latest seqno
    sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS, // Specify sending mode
    messages: [
        internal({
            to: 'EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin', // Recipient address
            value: '0.05', // Amount of TON to send
            body: 'Example transfer body' // Optional message body
        })
    ]
});
