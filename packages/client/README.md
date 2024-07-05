# @ton-api/client

## Overview
This SDK, automatically generated, facilitates access to endpoints provided by tonapi.io. For detailed API information, visit the [documentation](https://docs.tonconsole.com/tonapi).

To utilize tonapi, please set up an [account](https://tonconsole.com/).

## Getting started

Install the package using npm or yarn:

```sh
npm install @ton-api/client
# or
yarn add @ton-api/client
```

Install the required peer dependencies:

```sh
npm install @ton/core
# or
yarn add @ton/core
```

## Usage

Below is an example of how to use the SDK in your JavaScript project:

```js
import { TonApiClient, Api } from '@ton-api/client';

// Configure the HTTP client with your host and token
const http = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: YOUR_TOKEN
});

// Initialize the API client
const client = new Api(http);

// Fetch a typed array of account events
const events = await client.accounts.getAccountEvents(address, { limit: 50 });

// Retrieve an NFT collection
const collection = await client.nft.getNftCollection(address);

// Obtain information about a specific jetton
const jetton = await client.jettons.getJettonInfo(address);
```
