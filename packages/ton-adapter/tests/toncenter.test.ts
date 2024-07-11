import { TonClient, WalletContractV4, internal } from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';

// Create Client
const client = new TonClient({
    endpoint: 'https://toncenter.com/api/v2/jsonRPC'
});

test.only('Wallet contract', async () => {
    // Generate new key
    let mnemonics = await mnemonicNew();
    let keyPair = await mnemonicToPrivateKey(mnemonics);

    // Create wallet contract
    let workchain = 0; // Usually you need a workchain 0
    let wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });
    let contract = client.open(wallet);

    // Get balance
    let balance: bigint = await contract.getBalance();
    // console.log(balance);

    // Create a transfer
    let seqno: number = await contract.getSeqno();
    // console.log(seqno);

    // let transfer = await contract.createTransfer({
    //     seqno,
    //     secretKey: keyPair.secretKey,
    //     messages: [internal({
    //         value: '1.5',
    //         to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
    //         body: 'Hello world',
    //     })]
    // });
});
