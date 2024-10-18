import { SendMode, WalletContractV5R1, internal } from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

// Initialize TonApi client
const ta = new TonApiClient({
    baseUrl: 'https://tonapi.io'
    // apiKey: 'YOUR_API_KEY' // Uncomment this line and set your API key
});

// Create an adapter
const adapter = new ContractAdapter(ta);

// Create and use a wallet contract
async function main() {
    const mnemonics = await mnemonicNew();
    const keyPair = await mnemonicToPrivateKey(mnemonics);
    const wallet = WalletContractV5R1.create({ workchain: 0, publicKey: keyPair.publicKey });

    // Open the contract using the adapter
    const contract = adapter.open(wallet);

    // Get balance
    const balance = await contract.getBalance();
    console.log('Balance:', balance.toString());

    // Send a transfer
    const seqno = await contract.getSeqno();
    await contract
        .sendTransfer({
            seqno,
            secretKey: keyPair.secretKey,
            sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
            messages: [
                internal({
                    value: '0.001',
                    to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
                    body: 'Hello world'
                })
            ]
        })
        .catch(error => console.log(error.message)); // can't send transfer from noexists wallet
}

test('Readme example', async () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

    await main();

    // Check if console.log was called twice
    expect(consoleLogMock).toHaveBeenCalledTimes(2);

    // Check the first console.log call (Balance)
    expect(consoleLogMock.mock.calls[0]).toEqual(['Balance:', '0']);

    // Check the second console.log call (Error message)
    expect(consoleLogMock.mock.calls[1]).toEqual([
        'error code: 0 message: cannot apply external message to current state : Failed to unpack account state'
    ]);

    // Restore the original console.log
    consoleLogMock.mockRestore();
});
