import { WalletContractV5R1 } from '@ton/ton';
import { Address, beginCell, internal, external, SendMode, Message } from '@ton/core';
import { mnemonicToPrivateKey } from '@ton/crypto';
import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';
import { Cell, loadMessage } from '@ton/core';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Computes the hash of an external message.
 * If normalizeExternal is true and the message is of type 'external-in',
 * the function normalizes it before computing the hash.
 */
function normalizeHash(message: Message, normalizeExternal: boolean): Buffer {
    if (!normalizeExternal || message.info.type !== 'external-in') {
        return message.body.hash();
    }

    // Create a new cell for the normalized message
    let cell = beginCell()
        .storeUint(2, 2) // Message type: external-in
        .storeUint(0, 2) // No sender address for external messages
        .storeAddress(message.info.dest) // Store recipient address
        .storeUint(0, 4) // Import fee is always zero for external messages
        .storeBit(false) // No StateInit in this message
        .storeBit(true) // Store the body as a reference
        .storeRef(message.body) // Store the message body
        .endCell();

    return cell.hash();
}

// ----------------------------------------------------------
// 1) Using normalizeHash with a manually-created external message
// ----------------------------------------------------------

// Step 1: Create TonApiClient instance
const tonApiClient = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'YOUR_API_KEY', // Optional, improves request limits and access
});
const adapter = new ContractAdapter(tonApiClient);

// Step 2: Define the wallet and recipient addresses
const destination = Address.parse('EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M');
// Replace with your own mnemonics if testing in real environment
const mnemonics = 'word1 word2 ...'.split(' ');
const keyPair = await mnemonicToPrivateKey(mnemonics);

// Step 3: Open a wallet contract
const wallet = WalletContractV5R1.create({ workchain: 0, publicKey: keyPair.publicKey });
const contract = adapter.open(wallet);

// Step 4: Create and send an internal transfer transaction
const seqno = await contract.getSeqno();
const transfer = contract.createTransfer({
    seqno,
    secretKey: keyPair.secretKey,
    sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
    messages: [
        internal({
            to: destination,
            value: 5_000_000n // 0.5 TON
        })
    ]
});

await contract.send(transfer);

// Step 5: Wrap that transfer into an external message
// (This is how you'd create an external message yourself.)
const extMessage = external({
    to: contract.address,
    body: transfer
});

// Step 6: Compute the normalized external message hash
const manualExtMessageHash = normalizeHash(extMessage, true);
console.log('Manual Message Hash:', manualExtMessageHash.toString('hex'));

// Step 7: Wait for the transaction to be processed
await delay(10000);

// Step 8: Retrieve the resulting transaction using the normalized external hash
// You can retry this step if the transaction is not found, until 
const manualTransaction = await tonApiClient
    .getBlockchainTransactionByMessageHash(manualExtMessageHash.toString('hex'))
    .catch((error) => {
        console.error('Error fetching transaction:', error.message);
        return null;
    });
console.log('Manual Transaction Details:', manualTransaction);

// ----------------------------------------------------------
// 2) Using normalizeHash with a BOC-based external message
//    (e.g. from Ton Connect or transaction logs)
// ----------------------------------------------------------

// Example BOC string (replace with your own if needed)
const boc =
    'te6cckECBgEAAPYAAeWIAW7m9GMNMJnjJLq86chyLJWpEZh3KHlgHyzaMJzYP4z8A5tLO3P////rPqB8UAAAAFSG0dZING7hh4WcD15aQypy2WGh8kjiGdLhF3fBKrwTwuvhWyWdRxtWmO7UywTTYFbJk7a1mAyUW/GYUsHVj2wDAQIKDsPIbQMFAgJ7YgBFLU49uGmU3zOG8nNmcylqMjsoilVMAcYzYexnV5aM2BpiWgAAAAAAAAAAAAAAAAACMAAAAAEhlbGxvIYDBQEU/wD0pBP0vPLICwQASNMB0NMDAXGwkVvg+kAwcIAQyMsFWM8WIfoCy2oBzxbJgED7AAAACedZxw==';

// Step 1: Parse the BOC string into a Message object
const slice = Cell.fromBase64(boc).beginParse();
const bocMessage = loadMessage(slice);

// Step 2: Compute the normalized external hash
const bocExtMessageHash = normalizeHash(bocMessage, true);
console.log('BOC Message Hash:', bocExtMessageHash.toString('hex'));

// Step 3: Retrieve the transaction using that hash
const bocTransaction = await tonApiClient
    .getBlockchainTransactionByMessageHash(bocExtMessageHash.toString('hex'))
    .catch((error) => {
        console.error('Error fetching transaction:', error.message);
        return null;
    });
console.log('BOC Transaction Details:', bocTransaction);
