import {
    Address,
    WalletContractV4
} from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { WalletItem } from './utils/contract';
import {
    clientTonApi,
    getTonCenterClient
} from './utils/clients';

const client = process.env.CLIENT === 'toncenter' ? getTonCenterClient() : clientTonApi;

test('Exists wallet contract', async () => {
    // create wallet contract
    const address = Address.parse(
        '0:009d03ddede8c2620a72f999d03d5888102250a214bf574a29ff64df80162168'
    );
    const wallet = await WalletItem.createFromAddress(address);
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(471698230n);
});

// TODO: with case with ofchain wallet aork only with toncenter
// test('Missing wallet contract', async () => {
//     const workchain = 0;
//     const mnemonics = await mnemonicNew();
//     const keyPair = await mnemonicToPrivateKey(mnemonics);

//     const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
//     const contract = client.open(wallet);

//     // Get balance
//     const balance: bigint = await contract.getBalance();
//     expect(balance).toBeDefined();
//     expect(typeof balance === 'bigint').toBe(true);
//     expect(balance).toBe(0n);
// });
