import { Address, TupleItemInt, WalletContractV4, internal } from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { ContractForTestNumberArgs, WalletItem } from './utils/contract';
import { client } from './utils/clients';

// todo: mock tests
test('Exists wallet contract', async () => {
    // create wallet contract
    const address = Address.parse('UQDYzZmfsrGzhObKJUw4gzdeIxEai3jAFbiGKGwxvxHinf4K');
    const wallet = await WalletItem.createFromAddress(address);
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    // expect(balance).toBe(469029422n);
});

test('Missing wallet contract', async () => {
    const workchain = 0;
    const mnemonics = await mnemonicNew();
    const keyPair = await mnemonicToPrivateKey(mnemonics);

    const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(0n);
});

test('Uninit address with balance', async () => {
    // const address = Address.parse('EQBeNSukqcF7a27a-kq3R7xFjEa9w1vd2HpQ0NowlnHq6UqC');
    // const rawAddress = '0:5e352ba4a9c17b6b6edafa4ab747bc458c46bdc35bddd87a50d0da309671eae9';
    const publicKey =
        57787885441719996105546335440755198603738413181862234174694273066261933925918n;

    // create wallet contract
    const wallet = WalletContractV4.create({
        workchain: 0,
        publicKey: Buffer.from(publicKey.toString(16), 'hex')
    });
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(1326726n);
});

test('Uninit address without balance', async () => {
    // const address = Address.parse('EQAta6RYppvVkEavFszcZKFx9q1yobABP3vY5RE36DQxv6eO');
    // const rawAddress = '0:2d6ba458a69bd59046af16ccdc64a171f6ad72a1b0013f7bd8e51137e83431bf';
    const mnemonics = await mnemonicNew();
    const keyPair = await mnemonicToPrivateKey(mnemonics);

    const wallet = WalletContractV4.create({ workchain: 0, publicKey: keyPair.publicKey });

    // const publicKey =
    //     103331518834641293154200435092860708617866223941720484731223285872059976834397n;

    // // create wallet contract
    // const wallet = WalletContractV4.create({
    //     workchain: 0,
    //     publicKey: Buffer.from(publicKey.toString(16), 'hex')
    // });
    const contract = client.open(wallet);

    // Get balance
    const balance: bigint = await contract.getBalance();
    expect(balance).toBeDefined();
    expect(typeof balance === 'bigint').toBe(true);
    expect(balance).toBe(0n);
});

// TODO finish this test
test.skip('TON transfer test', async () => {
    const mnemonic =
        'around front fatigue cabin december maximum coconut music pride animal series course comic adjust inject swift high wage maid myself grass act bicycle credit'; // replace with a correct your mnemonic phrase
    const destination = Address.parse('UQB9FazDlanpDEVr0uySuc8egBySCIxTxs9sU2QUsqqTV54k'); // replace with a correct recipient address
    const amount = 1_000n; // amount in nanocoins. 0.01 TON.
    const keyPair = await mnemonicToPrivateKey(mnemonic.split(' '));

    const wallet = WalletContractV4.create({ workchain: 0, publicKey: keyPair.publicKey });
    const contract = client.open(wallet);

    const seqno = await contract.getSeqno();

    await contract
        .sendTransfer({
            seqno,
            secretKey: keyPair.secretKey,
            messages: [
                internal({
                    value: amount,
                    to: destination,
                    body: 'Example transfer body'
                })
            ]
        })
        .catch(console.log);

    // const transferPayload = beginCell()
    //     .storeUint(OP_CODES.JETTON_TRANSFER, 32)
    //     .storeUint(queryId ?? 0, 64)
    //     .storeCoins(jettonAmount)
    //     .storeAddress(receiverAddress)
    //     .storeAddress(excessesAddress)
    //     .storeBit(false) // null custom_payload
    //     .storeCoins(forwardAmount ?? 1n)
    //     .storeMaybeRef(typeof forwardBody === 'string' ? comment(forwardBody) : forwardBody)
    //     .endCell();

    // const relayerAddress = await printConfigAndReturnRelayAddress();

    // const tetherTransferPayload = makeJettonTransferPayload({
    //     queryId: getWalletQueryId(),
    //     jettonAmount: usdtTransferAmount,
    //     excessesAddress: relayerAddress,
    //     receiverAddress: destination,
    //     forwardBody: "It's my gasless USDT transfer!"
    // });

    // const relayerTransferMock = makeJettonTransferPayload({
    //     queryId: getWalletQueryId(),
    //     jettonAmount: 1n,
    //     forwardAmount: 0,
    //     excessesAddress: relayerAddress,
    //     receiverAddress: relayerAddress,
    //     forwardBody: beginCell().storeUint(OP_CODES.TK_RELAYER_FEE, 32).endCell()
    // });

    // const seqno = await contract.getSeqno();
    // const transfer = wallet.createTransfer({
    //     // For gasless we should build and sign ext in transfer
    //     authType: 'internal',
    //     // A valid secret key is not necessary for emulation. You can just pass a random buffer
    //     secretKey: keyPair.secretKey,
    //     sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
    //     seqno: seqno,
    //     messages: [
    //         internal({
    //             to: jettonWallet,
    //             bounce: true,
    //             value: BASE_JETTON_SEND_AMOUNT,
    //             body: tetherTransferPayload
    //         }),
    //         internal({
    //             to: jettonWallet,
    //             bounce: true,
    //             value: BASE_JETTON_SEND_AMOUNT,
    //             body: relayerTransferMock
    //         })
    //     ]
    // });
});

// There was a problem with parsing hex strings with an odd number of characters after '0x' on the backend.
test('Get data with number arg', async () => {
    const address = Address.parse('EQAz6ehNfL7_8NI7OVh1Qg46HsuC4kFpK-icfqK9J3Frd6CJ');
    const account = new ContractForTestNumberArgs(address);
    const contract = client.open(account);

    const value: TupleItemInt = {
        type: 'int',
        value: 1n
    };

    await contract.getReferralItemAddr([value]);
});
