import WebSocket from 'ws';

if (!global.WebSocket) {
    global.WebSocket = WebSocket;
}
