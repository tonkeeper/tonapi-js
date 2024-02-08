# @ton-api/streaming

⚠️ Note that the package is in public beta right now.

## TonAPI streaming api SDK

[Learn more about the streaming api](https://docs.tonconsole.com/tonapi/streaming-api)

Note, that you need to set up an [account](https://tonconsole.com/) to utilize TonApi.

## Overview 
This library allows you to subscribe to the Block, Account, Trace or Mempool events of the TON blockchain in real-time.
Use it to track transactions and accounts changes. 

## Getting started
Install package `npm i @ton-api/streaming`


### Subscribe to new blocks
```ts
import { BlocksObserver, WebsocketStreamProvider, BlockEvent } from '@ton-api/streaming';

// Set up websocket provider
// Note that you don't need to install polyfill for NodeJS, sdk will automatically use polyfill from 'ws' library if running in NodeJS environment
// This provider might be used with all the `observers` (BlockObserver, AccountsObserver, ...)
const wsProvider = new WebsocketStreamProvider(
    `wss://tonapi.io/v2/websocket?token=${YOUR_TONAPI_TOKEN}`
);
await wsProvider.open();

// Create an observer
const blockObserver = new BlocksObserver(wsProvider);

// Subscribe to new blocks appearing. First parameter is a worckchain blocks of which should be being tracked (0 for the basechain and -1 for the masterchain)
const unsubscribeCallback = blockObserver.subscribe(0, (event: BlockEvent) => {
    console.log(event);
});


// ... call it to unsubscribe when you don't more need to listen for new blocks
// unsubscribeCallback();

```

### Subscribe to the account events
```ts
import { AccountsObserver, WebsocketStreamProvider, AccountEvent } from '@ton-api/streaming';

// Set up websocket provider
// Note that you don't need to install polyfill for NodeJS, sdk will automatically use polyfill from 'ws' library if running in NodeJS environment
// This provider might be used with all the `observers` (BlockObserver, AccountsObserver, ...)
const wsProvider = new WebsocketStreamProvider(
    `wss://tonapi.io/v2/websocket?token=${YOUR_TONAPI_TOKEN}`
);
await wsProvider.open();

// Create an observer
const accountsObserver = new AccountsObserver(wsProvider);

// Subscribe to new transaction appearing on the account
const unsubscribeCallback = accountsObserver.subscribe({ account: "-1:5555555555555555555555555555555555555555555555555555555555555555" }, (event: AccountEvent) => {
    console.log(event);
});

// Subscribe to a multiplie accounts and specify opcodes to listen
const unsubscribeCallback2 = accountsObserver.subscribe([
        { account: "-1:5555555555555555555555555555555555555555555555555555555555555555", operations: ['JettonTransfer','0x0524c7ae'] },
        { account: "-1:5555555555555555555555555555555555555555555555555555550000000000" }
    ],
    (event: AccountEvent) => {
        console.log(event);
    }
);


// ... call it to unsubscribe when you don't more need to listen for new blocks
// unsubscribeCallback();
// unsubscribeCallback2();

```


### Subscribe to trace events
```ts
import { TraceObserver, WebsocketStreamProvider, TraceEvent } from '@ton-api/streaming';
import { HttpClient, Api } from '@ton-api/client';

// Set up websocket provider
// Note that you don't need to install polyfill for NodeJS, sdk will automatically use polyfill from 'ws' library if running in NodeJS environment
// This provider might be used with all the `observers` (BlockObserver, AccountsObserver, ...)
const wsProvider = new WebsocketStreamProvider(
    `wss://tonapi.io/v2/websocket?token=${YOUR_TONAPI_TOKEN}`
);
await wsProvider.open();

// Create an observer
const traceObserver = new TraceObserver(wsProvider);

// Subscribe to new traces appearing on the account
const unsubscribeCallback = traceObserver.subscribe("-1:5555555555555555555555555555555555555555555555555555555555555555", (event: TraceEvent) => {
    console.log(event);

    // Optional: Use @ton-api/client to get detailed trace data
    tonapiClient.traces.getTrace(event.hash).then(traceData => {
        console.log('Detailed trace data', traceData);
    })
});

// ... call it to unsubscribe when you don't more need to listen for new blocks
// unsubscribeCallback();

// Optional: Set up @ton-api/client to get detailed trace data
const httpClient = new HttpClient({
    baseUrl: 'https://tonapi.io',
    baseApiParams: {
        headers: {
            Authorization: `Bearer ${YOUR_TOKEN}`,
            'Content-type': 'application/json'
        }
    }
});
const tonapiClient = new Api(httpClient);

```


### Subscribe to mempool events
```ts
import { MempoolObserver, WebsocketStreamProvider, MempoolEvent } from '@ton-api/streaming';

// Set up websocket provider
// Note that you don't need to install polyfill for NodeJS, sdk will automatically use polyfill from 'ws' library if running in NodeJS environment
// This provider might be used with all the `observers` (BlockObserver, AccountsObserver, ...)
const wsProvider = new WebsocketStreamProvider(
    `wss://tonapi.io/v2/websocket?token=${YOUR_TONAPI_TOKEN}`
);
await wsProvider.open();

// Create an observer
const mempoolObserver = new MempoolObserver(wsProvider);

// Subscribe to all new mempool events
const unsubscribeCallback = mempoolObserver.subscribe('all', (event: MempoolEvent) => {
    console.log(event);
});

// You can also subscribe to mempool events only for the specified accounts
const unsubscribeCallback2 = mempoolObserver.subscribe([
        "-1:5555555555555555555555555555555555555555555555555555555555555555"
    ], 
    (event: MempoolEvent) => {
        console.log(event);
    }
);


// ... call it to unsubscribe when you don't more need to listen for new blocks
// unsubscribeCallback();
// unsubscribeCallback2();

```
