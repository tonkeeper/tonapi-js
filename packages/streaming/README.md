# @ton-api/streaming

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
import { BlocksObserver, WebsocketStreamProvider,BlockEvent } from '@ton-api/streaming';

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

