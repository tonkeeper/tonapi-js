"use strict";

var WebSocket = require('ws');

if (!global.WebSocket) {
    global.WebSocket = WebSocket;
}
