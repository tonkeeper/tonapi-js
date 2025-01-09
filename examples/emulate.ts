import { WalletContractV4 } from '@ton/ton';
import { Address, beginCell, internal, toNano, SendMode, external, storeMessage } from '@ton/core';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { TonApiClient } from '@ton-api/client';

// if you need to send lots of requests in parallel,
// make sure you use a tonapi token.
const ta = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'YOUR_API_KEY',
});

// Emulate transaction from wallet_v4 address
const emulateTransaction = async () => {
    // Sender's wallet address
    const senderAddress = Address.parse('UQAQxxpzxmEVU0Lu8U0zNTxBzXIWPvo263TIN1OQM9YvxsnV');
    const recipientAddress = Address.parse('UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt');

    // Get wallet's seqno and public key
    const { seqno } = await ta.wallet.getAccountSeqno(senderAddress);
    const { publicKey: publicKeyHex } = await ta.accounts.getAccountPublicKey(senderAddress);

    const wallet = WalletContractV4.create({
        workchain: 0,
        publicKey: Buffer.from(publicKeyHex, 'hex')
    });

    // Create dummy private key
    const dummyKey = (await mnemonicToPrivateKey(await mnemonicNew())).secretKey;

    // Generate payload for NFT transfer
    const body = beginCell()
        .storeUint(0x5fcc3d14, 32) // Operation code for NFT transfer
        .storeUint(0, 64) // Query ID
        .storeAddress(recipientAddress) // Recipient address
        .storeAddress(senderAddress) // Sender address
        .storeUint(0, 1)
        .storeCoins(toNano('0.0000001')) // Small transfer fee
        .storeBit(0) // No custom payload
        .endCell();

    // Create transfer for emulation
    const tr = wallet.createTransfer({
        seqno,
        secretKey: dummyKey,
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
        messages: [
            internal({
                value: toNano('0.5'),
                to: Address.parse('EQDvK4AbmarjScYfcfF95XLX5y1ges3zPWgOZavXo0SMmqH9'),
                body: body
            })
        ]
    });

    // Create external message for emulation
    const bocExternalMessage = beginCell()
        .store(
            storeMessage(
                external({
                    to: senderAddress,
                    init: undefined,
                    body: tr
                })
            )
        )
        .endCell();

    // Emulate transaction
    const emulateTrace = await ta.emulation.emulateMessageToEvent(
        { boc: bocExternalMessage },
        { ignore_signature_check: true } // Ignore signature for execute message from other account
    );

    console.log(emulateTrace);
};

emulateTransaction();
