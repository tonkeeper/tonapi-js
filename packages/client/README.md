# @ton-api/client

## Overview

`@ton-api/client` is an automatically generated SDK that provides seamless access to the endpoints
offered by [tonapi.io](https://tonapi.io). This client is specifically designed to integrate with
the TON blockchain, offering type-safe interactions and full compatibility with @ton/core library.

## Documentation

For detailed API information and endpoint descriptions, please refer to:

-   [Official TonAPI Documentation](https://docs.tonconsole.com/tonapi/rest-api)
-   [Swagger UI](https://tonapi.io/api-v2) - Interactive API explorer
-   [TonAPI Cookbook](https://docs.tonconsole.com/tonapi/cookbook) - Usage examples and recipes

## Features

-   Full coverage of tonapi.io endpoints
-   Type-safe interactions with the API
-   Seamless integration with `@ton/core`
-   Tree-shakeable imports for optimal bundle size
-   Structured error handling with `{ data, error }` pattern
-   Support for multiple client instances

Additionally, [`@ton-api/ton-adapter`](https://www.npmjs.com/package/@ton-api/ton-adapter) enables
users to work with contracts written for `@ton/ton` through `@ton-api/client`, ensuring seamless
integration while maintaining their existing code structure.

## Prerequisites

To use this SDK, you need to:

1. Set up an account at [tonconsole.com](https://tonconsole.com/)
2. Obtain an API key for authentication (optional for public endpoints, required for higher rate
   limits)

## Installation

Install the package and its peer dependencies using npm, yarn, or pnpm:

```sh
npm install @ton-api/client @ton/core buffer
```

> Note: `@ton/core` is a peer dependency and needs to be installed separately.

**Browser polyfill**

```js
// Add before using library
require('buffer');
```

> **Buffer** polyfill is also required for work `@ton/core` on frontend projects.

## Quick Start

Initialize the client and start making requests:

```typescript
import { initClient, getAccount } from '@ton-api/client';
import { Address } from '@ton/core';

// Initialize the default client
initClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'YOUR_API_KEY' // Optional, but recommended for production
});

// Make requests using { data, error } pattern
const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
const { data, error } = await getAccount({
    path: { accountId: address }
});

if (error) {
    console.error('Error:', error.message);
    return;
}

console.log('Account balance:', data.balance);
```

## Usage Examples

### Fetching Account Information

```typescript
import { initClient, getAccount } from '@ton-api/client';
import { Address } from '@ton/core';

initClient({ baseUrl: 'https://tonapi.io' });

const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
const { data, error } = await getAccount({
    path: { accountId: address }
});

if (error) {
    console.error('Failed to fetch account:', error.message);
    return;
}

console.log('Address:', data.address);
console.log('Balance:', data.balance);
console.log('Is active:', data.status === 'active');
```

### Working with Multiple Accounts

```typescript
import { getAccounts } from '@ton-api/client';
import { Address } from '@ton/core';

const addresses = [
    Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin'),
    Address.parse('EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi')
];

// Pass addresses in body
const { data, error } = await getAccounts({
    body: { accountIds: addresses }
});

if (error) {
    console.error('Error:', error.message);
    return;
}

console.log('Accounts:', data.accounts);
```

### Using Query Parameters

```typescript
import { getAccounts } from '@ton-api/client';

const addresses = [Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin')];

// Pass both body and query parameters
const { data, error } = await getAccounts({
    body: { accountIds: addresses },
    query: { currency: 'usd' }
});

if (error) {
    console.error('Error:', error.message);
    return;
}

console.log('Accounts with USD prices:', data.accounts);
```

### Fetching NFT Collection

```typescript
import { getNftCollection } from '@ton-api/client';
import { Address } from '@ton/core';

const collectionAddress = Address.parse('EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi');
const { data, error } = await getNftCollection({
    path: { accountId: collectionAddress }
});

if (error) {
    console.error('Error:', error.message);
    return;
}

console.log('Collection name:', data.metadata?.name);
console.log('Total items:', data.nextItemIndex);
```

### Getting Jetton Information

```typescript
import { getJettonInfo } from '@ton-api/client';
import { Address } from '@ton/core';

const jettonAddress = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
const { data, error } = await getJettonInfo({
    path: { accountId: jettonAddress }
});

if (error) {
    console.error('Error:', error.message);
    return;
}

console.log('Jetton name:', data.metadata?.name);
console.log('Symbol:', data.metadata?.symbol);
console.log('Total supply:', data.totalSupply);
```

### Using Address as String

You can pass addresses as `Address` objects or as strings:

```typescript
import { getAccount } from '@ton-api/client';
import { Address } from '@ton/core';

// Using Address object
const addressObject = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
const { data } = await getAccount({
    path: { accountId: addressObject }
});

// Using string directly
const { data: data2 } = await getAccount({
    path: { accountId: 'EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin' }
});
```

> **Note:** When passing address/cell strings, invalid format will result in
> `TonApiValidationError`. When passing `Address` objects, this validation error won't occur.

## Error Handling

By default, all methods return `{ data, error }` structure. This is the recommended way to handle
errors:

```typescript
import { getAccount } from '@ton-api/client';
import { Address } from '@ton/core';

const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
const { data, error } = await getAccount({
    path: { accountId: address }
});

if (error) {
    // Handle error
    console.error('Error:', error.message);
    return;
}

// TypeScript knows data is defined here
console.log('Balance:', data.balance);
```

### Error Types

The SDK provides specific error types for different scenarios:

```typescript
import {
    getAccount,
    TonApiHttpError,
    TonApiNetworkError,
    TonApiValidationError,
    TonApiParsingError
} from '@ton-api/client';

const { data, error } = await getAccount({
    path: { accountId: address }
});

if (error) {
    // Check specific error type
    if (error instanceof TonApiValidationError) {
        // Client-side validation error (invalid address/cell string)
        console.error('Validation error:', error.validationType); // 'Address' or 'Cell'
        console.error('Invalid input:', error.invalidInput);
    } else if (error instanceof TonApiHttpError) {
        // HTTP error from TonAPI (4xx, 5xx)
        console.error('HTTP', error.status, error.code);
        console.error('URL:', error.url);
    } else if (error instanceof TonApiNetworkError) {
        // Network error (connection failed, timeout)
        console.error('Network error:', error.message);
        console.error('Cause:', error.originalCause);
    } else if (error instanceof TonApiParsingError) {
        // SDK parsing error (unexpected API response format)
        console.error('Parsing error:', error.parsingType);
        console.error('Response:', error.response);
    }

    // Or use discriminated union
    switch (error.type) {
        case 'validation_error':
            console.log('Invalid', error.validationType, 'input:', error.invalidInput);
            break;
        case 'http_error':
            console.log('HTTP', error.status, error.code);
            break;
        case 'network_error':
            console.log('Network issue:', error.message);
            break;
        case 'parsing_error':
            console.log('Parsing failed for', error.parsingType);
            break;
    }
}
```

### Using `throwOnError` Option

If you prefer exceptions instead of `{ data, error }`, use `throwOnError: true`:

```typescript
import { getAccount } from '@ton-api/client';

// This will throw an exception on error instead of returning { data, error }
const data = await getAccount({
    path: { accountId: address },
    throwOnError: true
}).catch(error => {
    console.error('Error:', error.message);
    return null;
});

console.log('Balance:', data?.balance);
```

## Sending Transactions

```typescript
import { sendBlockchainMessage } from '@ton-api/client';
import { beginCell, external, storeMessage, Address } from '@ton/core';

const accountAddress = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

// Create your message (example)
const messageBody = beginCell().storeUint(0, 64).endCell();

const messageBoc = beginCell()
    .store(
        storeMessage(
            external({
                to: accountAddress,
                body: messageBody
            })
        )
    )
    .endCell();

// Send the message
const { data, error } = await sendBlockchainMessage({
    body: { boc: messageBoc }
});

if (error) {
    console.error('Failed to send message:', error.message);
    return;
}

console.log('Message sent successfully');
```

## Using Multiple Clients

You can use methods with different client instances by passing the `client` option:

```typescript
import { initClient, getAccount, TonApiClient } from '@ton-api/client';
import { Address } from '@ton/core';

// Initialize default client for mainnet
initClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'YOUR_API_KEY'
});

// Create a separate client for testnet
const testnetClient = new TonApiClient({
    baseUrl: 'https://testnet.tonapi.io',
    apiKey: 'YOUR_API_KEY'
});

const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

// Use default client (mainnet)
const { data: mainnetData } = await getAccount({
    path: { accountId: address }
});

// Use testnet client for specific call
const { data: testnetData } = await getAccount({
    client: testnetClient,
    path: { accountId: address }
});
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Alternative: Instance API

If you prefer object-oriented approach or need complete isolation between client instances, you can
use the Instance API. Instance API uses positional parameters instead of options objects.

```typescript
import { TonApiClient } from '@ton-api/client';
import { Address } from '@ton/core';

// Create a client instance
const tonapi = new TonApiClient({
    baseUrl: 'https://tonapi.io',
    apiKey: 'YOUR_API_KEY'
});

// Use instance methods with positional parameters
const address = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');
const account = await tonapi.getAccount(address);

console.log('Account balance:', account.balance);
```

### When to Use Instance API

Use the Instance API when you need:

-   **Multiple clients with different configurations**

    ```typescript
    const mainnet = new TonApiClient({
        baseUrl: 'https://tonapi.io',
        apiKey: 'KEY1'
    });
    const testnet = new TonApiClient({
        baseUrl: 'https://testnet.tonapi.io',
        apiKey: 'KEY2'
    });

    const mainnetAccount = await mainnet.getAccount(address);
    const testnetAccount = await testnet.getAccount(address);
    ```

-   **Dependency injection in large applications**

    ```typescript
    class AccountService {
        constructor(private tonapi: TonApiClient) {}

        async getBalance(address: Address) {
            const account = await this.tonapi.getAccount(address);
            return account.balance;
        }
    }

    const service = new AccountService(tonapi);
    ```

-   **Complete state isolation**
    ```typescript
    // Each instance is completely independent
    const client1 = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    const client2 = new TonApiClient({ baseUrl: 'https://tonapi.io' });
    ```

### Instance API Examples

#### Fetching Accounts with Query Parameters

```typescript
const tonapi = new TonApiClient({ baseUrl: 'https://tonapi.io' });

const addresses = [
    Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin'),
    Address.parse('EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi')
];

// Parameters: data, query, params
const accounts = await tonapi.getAccounts(
    { accountIds: addresses }, // data (body)
    { currency: 'usd' } // query parameters
);

console.log('Accounts:', accounts.accounts);
```

#### Executing Contract Methods

```typescript
import { execGetMethodForBlockchainAccount } from '@ton-api/client';

const tonapi = new TonApiClient({ baseUrl: 'https://tonapi.io' });

const jettonMaster = Address.parse('EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs');
const walletAddress = Address.parse('EQApwowlR6X54bXoso6orKCzCNm9ily8pAFy5vTwmsQ2Wqin');

const result = await tonapi.execGetMethodForBlockchainAccount(jettonMaster, 'get_wallet_address', {
    args: [walletAddress.toRawString()]
});

console.log('Jetton wallet:', result.decoded.jetton_wallet_address);
```

### Error Handling with Instance API

Instance API throws exceptions on errors, so use `.catch()` for error handling.

**Advantage**: The Instance API provides **typed `.catch()`** - TypeScript knows the error type is
`TonApiError`, not `unknown`! Error typing is preserved even through `.then()` and `.finally()`
chains.

```typescript
const tonapi = new TonApiClient({ baseUrl: 'https://tonapi.io' });

// Error typing is preserved through Promise chains
const account = await tonapi
    .getAccount(address)
    .then(acc => {
        console.log('Fetched account');
        return acc;
    })
    .catch(error => {
        // ✨ TypeScript knows error is TonApiError (not unknown)!
        // You get autocomplete for error.message, error.type, etc.

        if (error instanceof TonApiValidationError) {
            console.error('Invalid address:', error.invalidInput);
        } else if (error instanceof TonApiHttpError) {
            console.error('HTTP Error:', error.status, error.code);
        } else if (error instanceof TonApiNetworkError) {
            console.error('Network Error:', error.message);
        }
        return null;
    });

if (account) {
    console.log('Balance:', account.balance);
}
```

> **Note**: With the Advanced API using `throwOnError: true`, the `.catch()` error is `unknown`
> (standard Promise behavior). For typed error handling in `.catch()`, use the Instance API instead.

## Advanced Features

For more advanced use cases, check out the examples in our repository:

-   **[Transaction Emulation](https://github.com/tonkeeper/tonapi-js/blob/main/examples/emulate.ts)** -
    Emulate transactions before sending
-   **[Gasless Transfers](https://github.com/tonkeeper/tonapi-js/blob/main/examples/gasless.ts)** -
    Send jettons without TON for gas
-   **[Transaction Tracking](https://github.com/tonkeeper/tonapi-js/blob/main/examples/track-transaction.ts)** -
    Track transaction status by hash
-   **[Sending TON](https://github.com/tonkeeper/tonapi-js/blob/main/examples/send-ton.ts)** -
    Complete example with wallet integration
-   **[Sending Jettons](https://github.com/tonkeeper/tonapi-js/blob/main/examples/send-jetton.ts)** -
    Transfer jetton tokens

## Working with Contracts

For advanced contract interactions, use
[`@ton-api/ton-adapter`](https://www.npmjs.com/package/@ton-api/ton-adapter):

```typescript
import { TonApiClient } from '@ton-api/client';
import { ContractAdapter } from '@ton-api/ton-adapter';
import { WalletContractV5R1 } from '@ton/ton';

const tonapi = new TonApiClient({ baseUrl: 'https://tonapi.io' });
const adapter = new ContractAdapter(tonapi);

const wallet = WalletContractV5R1.create({
    workchain: 0,
    publicKey: keyPair.publicKey
});
const contract = adapter.open(wallet);

const seqno = await contract.getSeqno();
```

## API Reference

For a complete list of available methods and their parameters, refer to:

-   [Swagger UI](https://tonapi.io/api-v2) - Interactive API documentation
-   [TonAPI Documentation](https://docs.tonconsole.com/tonapi) - Detailed guides and examples
-   [GitHub Repository](https://github.com/tonkeeper/tonapi-js) - Source code and examples

## License

MIT
