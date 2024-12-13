import { Cell, WalletContractV4 } from '@ton/ton';
import { Address, beginCell, internal, toNano, SendMode, external, storeMessage } from '@ton/core';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { TonApiClient } from '@ton-api/client';

const client = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'YOUR_API_KEY',
});

// Emulate transaction from wallet_v4 address

const emulateTransaction = async () => {
    const senderAddress = Address.parse('UQAQxxpzxmEVU0Lu8U0zNTxBzXIWPvo263TIN1OQM9YvxsnV');

    const { seqno } = await client.wallet.getAccountSeqno(senderAddress);
    
    // @ts-ignore 
    // FIXME: Update generator to produce the correct interface.
    const { publicKey: publicKeyHex } = await client.accounts.getAccountPublicKey(senderAddress); 

    const workchain = 0;
    const publicKey = Buffer.from(publicKeyHex, 'hex');

    const wallet = WalletContractV4.create({ workchain, publicKey });

    const dummyKey = (await mnemonicToPrivateKey(await mnemonicNew())).secretKey; // create dummy mnemonic

    // generate body for transfer NFT
    const body = beginCell()
        .storeUint(0x5fcc3d14, 32)
        .storeUint(0, 64)
        .storeAddress(Address.parse('UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt'))
        .storeAddress(senderAddress)
        .storeUint(0, 1)
        .storeCoins(toNano('0.0000001'))
        .storeBit(0)
        .endCell();

    const externalMessage = (body: Cell) => {
        return beginCell()
            .store(
                storeMessage(
                    external({
                        to: senderAddress,
                        init: undefined,
                        body: body
                    })
                )
            )
            .endCell();
    };

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

    const boc = externalMessage(tr);

    const emulateTrace = await client.emulation.emulateMessageToEvent(
        { boc },
        { ignore_signature_check: true } // ignore signature for execute message from other account
    );

    console.log(emulateTrace);
};

emulateTransaction();
