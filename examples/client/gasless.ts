import { Api, TonApiClient } from '@ton-api/client';
import {storeMessageRelaxed, WalletContractV5R1} from "@ton/ton";
import {Address, beginCell, internal, Cell, toNano } from '@ton/core';
import {mnemonicToPrivateKey, sign} from '@ton/crypto';
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
    JETTON_TRANSFER: 0xf8a7ea5,
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

function makeJettonTransferPayload(createJettonTransferPayloadParams: CreateJettonTransferPayloadParams) {
    return beginCell()
      .storeUint(OP_CODES.JETTON_TRANSFER, 32)
      .storeUint(
        createJettonTransferPayloadParams.queryId ?? 0,
        64,
      )
      .storeCoins(createJettonTransferPayloadParams.jettonAmount)
      .storeAddress(createJettonTransferPayloadParams.receiverAddress)
      .storeAddress(createJettonTransferPayloadParams.excessesAddress)
      .storeBit(false) // null custom_payload
      .storeCoins(createJettonTransferPayloadParams.forwardAmount ?? BigInt(1))
      .storeMaybeRef(createJettonTransferPayloadParams.forwardBody)
      .endCell();
}

// Amount for jetton transfer. Usually 0.1 TON is enough for most jetton transfers without forwardBody
const BASE_JETTON_SEND_AMOUNT = toNano(0.1);

const main = async () => {
    const mnemonic = 'around front fatigue cabin december maximum coconut music pride animal series course comic adjust inject swift high wage maid myself grass act bicycle credit'; // replace with a correct your mnemonic phrase
    const destination = Address.parse('EQAta6RYppvVkEavFszcZKFx9q1yobABP3vY5RE36DQxv6eO'); // replace with a correct recipient address
    const usdtMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master.

    const keyPair = await mnemonicToPrivateKey(mnemonic.split(' '));
    const workChain = 0;
    const wallet = WalletContractV5R1.create({ workChain, publicKey: keyPair.publicKey });

    const address = wallet.address;
    const jettonWalletAddressResult = await client.blockchain.execGetMethodForBlockchainAccount(
        usdtMaster,
        'get_wallet_address',
        {
            args: [address.toRawString()]
        }
    );
    const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jettonWalletAddress);

    const relayerAddress = await printConfigAndReturnRelayAddress();

    const tetherTransferPayload = makeJettonTransferPayload({
        queryId: 0,
        jettonAmount: BigInt(1),
        excessesAddress: relayerAddress,
        receiverAddress: destination,
    });

    const messageToEstimate = beginCell()
      .storeWritable(
        storeMessageRelaxed(
          internal({
            to: jettonWallet,
            bounce: true,
            value: BASE_JETTON_SEND_AMOUNT,
            body: tetherTransferPayload
          }),
        ),
      )
      .endCell()

  const params = await client.gasless.gaslessEstimate(usdtMaster, {
        walletAddress: address,
        walletPublicKey: keyPair.publicKey.toString('hex'),
        messages: [{
          boc: messageToEstimate
        }]
    }).catch(async (res) => console.log(await res.json()));

  console.log(params);
};

async function printConfigAndReturnRelayAddress(): Promise<Address> {
    const cfg = await client.gasless.gaslessConfig();

    console.log('Available jettons for gasless transfer');
    console.log(cfg.gasJettons.map(gasJetton => gasJetton.masterId));

    console.log(`Relay address to send fees to: ${cfg.relayAddress}`);
    return cfg.relayAddress;
}

main().catch(console.error);
