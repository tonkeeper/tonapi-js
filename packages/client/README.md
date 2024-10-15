# @ton-api/client

## Overview

`@ton-api/client` is an automatically generated SDK that provides seamless access to the endpoints offered by [tonapi.io](https://tonapi.io). This client is specifically designed to integrate with the TON blockchain, offering type-safe interactions and full compatibility with @ton/core library.

## Documentation

For a detailed view of all methods and endpoints in a Swagger format, refer to the [Swagger documentation](https://tonapi.io/api-v2)
For detailed API information and endpoint descriptions, please refer to the [official documentation](https://docs.tonconsole.com/tonapi/rest-api) or check the [Swagger UI](https://tonapi.io/api-v2) for an interactive method list.

## Features

- Full coverage of tonapi.io endpoints
- Type-safe interactions with the API
- Seamless integration with `@ton/core`
<!-- - Automatically generated from the latest API specifications -->

Additionally, [`@ton-api/ton-adapter`](https://www.npmjs.com/package/@ton-api/ton-adapter) enables users to work with contracts written for `@ton/ton` through `@ton-api/client`, ensuring seamless integration while maintaining their existing code structure.

## Prerequisites

To use this SDK, you need to:

1. Set up an account at [tonconsole.com](https://tonconsole.com/)
2. Obtain an API key for authentication

## Installation

Install the package and its peer dependencies using npm, yarn, or pnpm:

```sh
npm install @ton-api/client @ton/core
# or
yarn add @ton-api/client @ton/core
# or
pnpm add @ton-api/client @ton/core
```

## Quick Start

Here's a basic example to get you started:

```javascript
import { TonApiClient } from '@ton-api/client';
import { Address } from '@ton/core';

// Initialize the TonApi
const ta = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'YOUR_API_KEY'
});

// Use the API
async function fetchAccountEvents() {
    const address = Address.parse('YOUR_ADDRESS_HERE');
    const events = await ta.accounts.getAccountEvents(address, { limit: 50 })
    
    console.log('Account events:', events)
}

fetchAccountEvents();
```

## Documentation

For detailed API information and endpoint descriptions, please refer to the [official documentation](https://docs.tonconsole.com/tonapi).

## Usage Examples

### Fetching NFT Collection

```javascript
const collectionAddress = Address.parse('COLLECTION_ADDRESS_HERE');

ta.nft.getNftCollection(collectionAddress)
    .then(collection => console.log('NFT Collection:', collection))
    .catch(error => console.error('Error fetching NFT collection:', error));
```

### Getting Jetton Information

```javascript
const jettonAddress = Address.parse('JETTON_ADDRESS_HERE');

ta.jettons.getJettonInfo(jettonAddress)
    .then(jetton => console.log('Jetton Info:', jetton))
    .catch(error => console.error('Error fetching jetton info:', error));
```

## License

MIT
