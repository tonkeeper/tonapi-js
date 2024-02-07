# @ton-api/isomorphic-ws

This package provides `WebSocket` applicable in different environments (browser & NodeJS).

## Get started
`npm i @ton-api/isomorphic-ws`

## How to use
Just import the package and use global `WebSocket` constructor:

```ts
import '@ton-api/isomorphic-ws';

const webSocketInstance = new WebSocket();
```

That will work in both browser and NodeJS.

## How does it work
This package exports an empty script if bundler creates browser-compatible build.
When package is imported in NodeJS environment, it assigns an `WebSocket` imported from the `ws` package to the `global` variable.

Note that this package doesn't provide an `WebSocket` polyfill for browsers which doesn't support `WebSocket` natively. 
