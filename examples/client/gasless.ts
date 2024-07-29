import { Api, TonApiClient } from '@ton-api/client';
import {loadStateInit, storeMessageRelaxed, WalletContractV5R1} from '@ton/ton';
import {Address, beginCell, internal, Cell, toNano, SendMode, storeMessage, external} from '@ton/core';
import { mnemonicToPrivateKey, sign } from '@ton/crypto';
import { ContractAdapter } from '@ton-api/ton-adapter';

const http = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    baseApiParams: {
        headers: {
            'Content-type': 'application/json'
        }
    }
});
const client = new Api(http);
const provider = new ContractAdapter(client);

const OP_CODES = {
    TK_RELAYER_FEE: 0x878da6e3,
    JETTON_TRANSFER: 0xf8a7ea5
};

export interface CreateJettonTransferPayloadParams {
    /* Forward TON amount */
    forwardAmount?: number | bigint;
    /* Address for excesses */
    excessesAddress: Address;
    /* Receiver's address */
    receiverAddress: Address;
    jettonAmount: number | bigint;
    forwardBody?: Cell;
    /* Query id */
    queryId?: number | bigint;
}

// Amount for jetton transfer. Usually 0.1 TON is enough for most jetton transfers without forwardBody
const BASE_JETTON_SEND_AMOUNT = toNano(0.05);

const main = async () => {
    const mnemonic =
        'around front fatigue cabin december maximum coconut music pride animal series course comic adjust inject swift high wage maid myself grass act bicycle credit'; // replace with a correct your mnemonic phrase
    const destination = Address.parse('UQBt_5uz9k8ZeDIQLmFyzhdcifbgHcT7jQIL0rPRrNn9caxt'); // replace with a correct recipient address
    const usdtMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master.

    // TODO replace with a correct amount
    const jettonAmount = 100_000n; // amount in nanocoins. 1 USDt.

    const keyPair = await mnemonicToPrivateKey(mnemonic.split(' '));
    const workChain = 0;
    const wallet = WalletContractV5R1.create({ workChain, publicKey: keyPair.publicKey });
    const contract = provider.open(wallet);

    const address = wallet.address;
    console.log(address);
    const jettonWalletAddressResult = await client.blockchain.execGetMethodForBlockchainAccount(
        usdtMaster,
        'get_wallet_address',
        {
            args: [address.toRawString()]
        }
    );
    const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jettonWalletAddress);

    const relayerAddress = await printConfigAndReturnRelayAddress();

    const tetherTransferPayload = beginCell()
        .storeUint(OP_CODES.JETTON_TRANSFER, 32)
        .storeUint(0, 64)
        .storeCoins(jettonAmount) // 1 USDT
        .storeAddress(destination) // address for receiver
        .storeAddress(relayerAddress) // address for excesses
        .storeBit(false) // null custom_payload
        .storeCoins(1n) // count of forward transfers in nanoton
        .storeMaybeRef(undefined)
        .endCell();

    const messageToEstimate = beginCell()
        .storeWritable(
            storeMessageRelaxed(
                internal({
                    to: jettonWallet,
                    bounce: true,
                    value: BASE_JETTON_SEND_AMOUNT,
                    body: tetherTransferPayload
                })
            )
        )
        .endCell();

    const params = await client.gasless.gaslessEstimate(usdtMaster, {
        walletAddress: address,
        walletPublicKey: keyPair.publicKey.toString('hex'),
        messages: [
            {
                boc: messageToEstimate
            }
        ]
    }); // .catch(res => res.json().then(console.error));;

    console.log(params);

    const seqno = await contract.getSeqno();

    const tetherTransferForSend = wallet.createTransfer({
        seqno,
        authType: 'internal',
        timeout: Math.ceil(Date.now() / 1000) + 5 * 60,
        secretKey: keyPair.secretKey,
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
        messages: params.messages.map(message => internal({
            to: message.address,
            value: BigInt(message.amount),
            body: message.payload,
            init: message.stateInit && loadStateInit(message.stateInit.asSlice()),
        }))
    });

    const extMessage = beginCell()
      .storeWritable(
        storeMessage(
          external(
            {
                to: contract.address,
                init: seqno === 0 ? contract.init : undefined,
                body: tetherTransferForSend,
            }
          )
        )
      )
      .endCell();

    client.gasless
        .gaslessSend({
            walletPublicKey: keyPair.publicKey.toString('hex'),
            boc: extMessage
        })
        .catch(res => res.json().then(console.error));
};

async function printConfigAndReturnRelayAddress(): Promise<Address> {
    const cfg = await client.gasless.gaslessConfig();

    console.log('Available jettons for gasless transfer');
    console.log(cfg.gasJettons.map(gasJetton => gasJetton.masterId));

    console.log(`Relay address to send fees to: ${cfg.relayAddress}`);
    return cfg.relayAddress;
}

main().catch(console.error);
