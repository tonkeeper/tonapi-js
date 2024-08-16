# @ton-api/ton-adapter

## Overview

`@ton-api/ton-adapter` is an adapter that enables integration between
[TonApi client](https://www.npmjs.com/package/@ton-api/client) and the
[@ton/ton](https://www.npmjs.com/package/@ton/ton) and
[@ton/core](https://www.npmjs.com/package/@ton/core) libraries. This adapter allows developers to
use TonApi's functionality while maintaining compatibility with existing TON blockchain development
tools.

## Features

-   Integration with `@ton-api/client`
-   Compatibility with `@ton/ton` and `@ton/core` contract wrappers
-   Eliminates the need for additional RPC providers
-   Facilitates blockchain interactions through TonApi

## Installation

Install the package and its peer dependency using npm, yarn, or pnpm:

```sh
npm install @ton-api/client @ton-api/ton-adapter
# or
yarn add @ton-api/client @ton-api/ton-adapter
# or
pnpm add @ton-api/client @ton-api/ton-adapter
```

## Quick Start

Here's a basic example to get you started:

```typescript
import { SendMode, WalletContractV5R1, internal } from '@ton/ton';
import { mnemonicNew, mnemonicToPrivateKey } from '@ton/crypto';
import { Api, TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';

// Initialize TonApi client
const httpClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'YOUR_API_KEY'
});
const client = new Api(httpClient);

// Create an adapter
const adapter = new ContractAdapter(client);

// Create and use a wallet contract
async function main() {
    const mnemonics = await mnemonicNew();
    const keyPair = await mnemonicToPrivateKey(mnemonics);
    const wallet = WalletContractV5R1.create({ workChain: 0, publicKey: keyPair.publicKey });

    // Open the contract using the adapter
    const contract = adapter.open(wallet);

    // Get balance
    const balance = await contract.getBalance();
    console.log('Balance:', balance.toString());

    // Send a transfer
    const seqno = await contract.getSeqno();
    await contract.sendTransfer({
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
    });
}

main().catch(console.error);
```

## Usage

1. Create a TonApi client.
2. Initialize the `ContractAdapter` with the TonApi client.
3. Use the `open` method of the adapter to work with any @ton/ton or @ton/core compatible smart
   contract wrapper.
4. Interact with the contract as you would normally, but now using TonApi under the hood.

## License

MIT