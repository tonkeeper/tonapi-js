# @ton-api/ton-adapter

⚠️ Note that the package is in public beta right now.

## Overview
This is adapter allows to utilize [TonApi client](https://www.npmjs.com/package/@ton-api/client) with [@ton/ton](https://www.npmjs.com/package/@ton/ton) and [@ton/core](https://www.npmjs.com/package/@ton/core) libraries


## Getting started
Install the package using npm or yarn:

```sh
npm install @ton-api/ton-adapter @ton-api/client
# or
yarn add @ton-api/ton-adapter @ton-api/client
```

## Usage
Create a tonapi client first to use the adapter. You can `open` any wrapper of `@ton/ton` of `@ton/core`-compatible smart contract using the adapter.
It means that you don't need additional rpc provider for the contracts-wrappers, you can work with the, using tonapi.

```typescript
import { TonClient, WalletContractV4, internal } from "@ton/ton";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";
import { Api, TonApiClient } from '@ton-api/client';
import { ContractAdapter } from "@ton-api/ton-adapter";

const httpClient = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: YOUR_TOKEN
});

// Initialize the ton API client
const client = new Api(httpClient);

// Create an adapter 
const adapter = new ContractAdapter(client);


// Create wallet contract
const mnemonics = await mnemonicNew();
const keyPair = await mnemonicToPrivateKey(mnemonics);
const workchain = 0;
const wallet = WalletContractV4.create({ workchain, publicKey: keyPair.publicKey });

// Use tonapi adapter to work with any @ton/ton smart-contracts wrappers
const contract = adapter.open(wallet);

// Get balance
const balance: bigint = await contract.getBalance();

// Create a transfer
const seqno: number = await contract.getSeqno();
await contract.sendTransfer({
    seqno,
    secretKey: keyPair.secretKey,
    messages: [internal({
        value: '0.001',
        to: 'EQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N',
        body: 'Hello world',
    })]
});
```
