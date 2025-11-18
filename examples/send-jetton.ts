import { WalletContractV5R1, Address, beginCell, internal, toNano, SendMode } from '@ton/ton';
import { mnemonicToPrivateKey } from '@ton/crypto';

import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

// Create TonApiClient instance
const tonApiClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    // apiKey: 'YOUR_API_KEY', // Optional, improves request limits and access
});

// Create an adapter for interacting with contracts
const adapter = new ContractAdapter(tonApiClient);

// Base gas fee required for the jetton transfer
const BASE_JETTON_SEND_AMOUNT = toNano(0.05);

// Define recipient and jetton master contract addresses
const destination = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin'); // Replace with the actual recipient address
const jettonMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master contract

// Define jetton transfer amount in the smallest jetton units (1 USDt)
const jettonAmount = 1_000_000n;

// Convert mnemonic phrase to a private key
const mnemonics = 'word1 word2 ...'.split(' '); // Wallet seed phrase (24 words)
const keyPair = await mnemonicToPrivateKey(mnemonics); // Generate key pair

// Create a wallet contract (Wallet V5R1, other versions or contract types can be used)
const wallet = WalletContractV5R1.create({ workchain: 0, publicKey: keyPair.publicKey });
const contract = adapter.open(wallet); // Open the wallet contract using the adapter

// Get the sender's jetton wallet address from the jetton master contract
const jettonWalletAddressResult = await tonApiClient.execGetMethodForBlockchainAccount(
    jettonMaster,
    'get_wallet_address',
    { args: [wallet.address.toRawString()] }
).catch((error) => {
    console.error('Error getting jetton wallet address:', error.message);
    process.exit(1);
});

const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jetton_wallet_address); // Extract the jetton wallet address

// Create payload for the jetton transfer
const jettonTransferPayload = beginCell()
    .storeUint(0xf8a7ea5, 32) // JETTON_TRANSFER_OP_CODE (operation identifier)
    .storeUint(0, 64) // Query ID (0 for new transactions)
    .storeCoins(jettonAmount) // Amount to transfer (1 USDt)
    .storeAddress(destination) // Recipient address
    .storeAddress(wallet.address) // Address to receive excess funds (usually address of sender)
    .storeBit(false) // No custom payload
    .storeCoins(1n) // Forward fee in nanoTON (for send notify to wallet)
    .storeMaybeRef(undefined)
    .endCell();

// Get the current seqno (sequence number) for the wallet transaction
const seqno = await contract.getSeqno();

// Send the transfer transaction
await contract.sendTransfer({
    seqno, // Required to ensure transaction uniqueness
    secretKey: keyPair.secretKey, // Sign the transaction with the private key
    sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS, // Specify send mode
    messages: [
        internal({
            to: jettonWallet, // Sending to the sender's jetton wallet
            value: BASE_JETTON_SEND_AMOUNT, // Gas fee
            body: jettonTransferPayload // Jetton transfer payload
        })
    ]
});