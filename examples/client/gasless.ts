import { Api, TonApiClient } from '@ton-api/client';
import { WalletContractV5R1 } from '@ton/ton';
import { Address, SendMode, beginCell, internal } from '@ton/core';
import { mnemonicToPrivateKey } from '@ton/crypto';
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

const main = async () => {
    const mnemonic =
        'around front fatigue cabin december maximum coconut music pride animal series course comic adjust inject swift high wage maid myself grass act bicycle credit'; // replace with a correct your mnemonic phrase
    const destination = Address.parse('EQAta6RYppvVkEavFszcZKFx9q1yobABP3vY5RE36DQxv6eO'); // replace with a correct address
    const usdtMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'); // USDt jetton master.
    // TODO: change value to 1USDT
    const jettonAmount = 10000n; // amount in the smallest jetton units. This is 1 USDt.

    const keyPair = await mnemonicToPrivateKey(mnemonic.split(' '));
    const workChain = 0;
    const wallet = WalletContractV5R1.create({ workChain, publicKey: keyPair.publicKey });
    const contract = provider.open(wallet);

    const address = wallet.address;
    const jettonWalletAddressResult = await client.blockchain.execGetMethodForBlockchainAccount(
        usdtMaster,
        'get_wallet_address',
        {
            args: [address.toRawString()]
        }
    );
    // console.log(jettonWalletAddressResult);


    const jettonWallet = Address.parse(jettonWalletAddressResult.decoded.jettonWalletAddress);

    const relay = await printConfigAndReturnRelayAddress();

    const TK_RELAYER_FEE = 0x878da6e3;
    const refCell = beginCell().storeUint(TK_RELAYER_FEE, 32).endCell();
    const reservedGasFee = 50000000n; // TODO: description

    // TODO: move this to the separate function
    const mockMessageTransfer = beginCell()
        .storeUint(260734629, 32)
        .storeUint(0, 64)
        .storeCoins(jettonAmount) // 10000n
        .storeAddress(destination)
        .storeAddress(relay) // description
        .storeBit(false)
        .storeCoins(1n)
        .storeMaybeRef(refCell)
        .endCell();

    const mockMessageLayerFee = beginCell()
        .storeUint(260734629, 32)
        .storeUint(0, 64)
        .storeCoins(jettonAmount) // 10000n
        .storeAddress(destination)
        .storeAddress(relay) // description
        .storeBit(false)
        .storeCoins(1n)
        .storeMaybeRef(refCell)
        .endCell();

    const mockInternalMessageTransfer = internal({
        to: jettonWallet,
        bounce: true,
        value: 1n,
        body: mockMessageTransfer
    });

    const mockInternalMessageLayerFee = internal({
        to: jettonWallet,
        bounce: true,
        value: 1n,
        body: mockMessageLayerFee
    });

    const seqno: number = await contract.getSeqno();
    const transfer = await wallet.createTransfer({
        seqno: seqno,
        secretKey: keyPair.secretKey,
        messages: [mockInternalMessageTransfer, mockInternalMessageLayerFee],
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS
    });

    const params = await client.gasless.gaslessEstimate(usdtMaster, {
        walletAddress: address,
        walletPublicKey: keyPair.publicKey.toString('hex'),
        messages: [{
            boc: transfer,
        }]
    }).catch(async (res) => console.log(await res.json()));

    // console.log('Estimated gas fee:', params);

    // we use USDt in this example,
    // so we just print all supported gas jettons and get the relay address.
    // we have to send excess to the relay address in order to make a transfer cheaper.
};

async function printConfigAndReturnRelayAddress(): Promise<Address> {
    const cfg = await client.gasless.gaslessConfig();

    console.log('Available gas jettons:');
    cfg.gasJettons.forEach(gasJetton => {
        console.log(`Gas jetton master: ${gasJetton.masterId}`);
    });

    console.log(`Relay address to send fees to: ${cfg.relayAddress}`);
    return cfg.relayAddress;
}

main().catch(console.error);
