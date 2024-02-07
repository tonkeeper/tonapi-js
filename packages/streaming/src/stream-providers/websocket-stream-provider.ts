import {
    isJsonRpcResponse,
    isJsonRpcResponseSuccess,
    JsonRpcEvent,
    JsonRpcMessage
} from '../models';
import { StreamProvider, StreamSubscription } from './stream-provider';
import { ErrorEvent, MessageEvent, WebSocket } from 'ws';

export class WebsocketStreamProvider implements StreamProvider {
    private socket: WebSocket | undefined;

    private isClosed = false;

    private pendingRequests = new Map<number, { res: () => void; rej: (reason: Error) => void }>();

    private lastId = 0;

    private subscriptions: StreamSubscription[] = [];

    constructor(private readonly url: string) {}

    public async open(options?: { openingDeadlineMS?: number }): Promise<void> {
        if (this.isClosed) {
            return;
        }

        this.socket = new WebSocket(this.url);

        return new Promise((resolve, reject) => {
            const timeout = options?.openingDeadlineMS
                ? setTimeout(() => {
                      if (this.socket?.readyState !== WebSocket.OPEN) {
                          reject(new Error('TonApi stream connection timeout'));
                          this.close();
                      }
                  }, options.openingDeadlineMS)
                : undefined;

            this.socket!.onerror = () => reject;
            this.socket!.onopen! = (): void => {
                clearTimeout(timeout);
                this.isClosed = false;
                this.socket!.onerror = this.errorsHandler.bind(this);
                this.socket!.onmessage = this.messagesHandler.bind(this);
                resolve();
            };
        });
    }

    public async close(): Promise<void> {
        this.isClosed = true;
        this.socket?.close();
    }

    public async send(
        method: string,
        params?: Record<string, unknown> | unknown[] | string
    ): Promise<void> {
        if (this.isClosed || !this.socket) {
            throw new Error("Can't subscribe to closed stream");
        }

        this.lastId++;
        this.socket.send(JSON.stringify({ id: this.lastId, jsonrpc: '2.0', method, params }));

        return new Promise((res, rej) => {
            this.pendingRequests.set(this.lastId, { res, rej });
        });
    }

    public subscribe(subscription: StreamSubscription): () => void {
        this.subscriptions.push(subscription);
        return () => {
            this.subscriptions = this.subscriptions.filter(s => s !== subscription);
        };
    }

    private errorsHandler(e: ErrorEvent): void {
        if (!this.isClosed) {
            if (this.socket?.readyState === EventSource.CLOSED) {
                this.socket.close();
                this.open();
                return;
            }

            if (this.socket?.readyState === EventSource.CONNECTING) {
                console.debug('[TON_API_SDK_ERROR]: Stream error', JSON.stringify(e));
                return;
            }
        }
    }

    private async messagesHandler(e: MessageEvent): Promise<void> {
        if (!this.isClosed) {
            let incomingEvent: JsonRpcMessage;

            try {
                incomingEvent = JSON.parse(e.data as string);
                if (!incomingEvent || typeof incomingEvent !== 'object') {
                    throw new Error('Rpc message must be an object');
                }

                const isResponse =
                    'id' in incomingEvent &&
                    incomingEvent.id !== undefined &&
                    'method' in incomingEvent &&
                    ('result' in incomingEvent ||
                        ('error' in incomingEvent &&
                            incomingEvent.error &&
                            typeof incomingEvent.error === 'object' &&
                            'message' in incomingEvent.error));

                const isEvent =
                    'params' in incomingEvent && incomingEvent.params && 'method' in incomingEvent;

                if (!isResponse && !isEvent) {
                    throw new Error('Wrong rpc message formt ' + incomingEvent.toString());
                }
            } catch (e) {
                throw new Error(`TonApi stream message parse failed, message ${e}`);
            }

            if (isJsonRpcResponse(incomingEvent)) {
                const id = Number(incomingEvent.id);
                if (!this.pendingRequests.has(id)) {
                    console.debug(
                        '[TON_API_SDK_ERROR]: Unknown rpc response',
                        JSON.stringify(incomingEvent)
                    );
                    return;
                }

                const { res, rej } = this.pendingRequests.get(id)!;
                if (isJsonRpcResponseSuccess(incomingEvent)) {
                    res();
                } else {
                    rej(new Error(incomingEvent.error.message));
                }

                this.pendingRequests.delete(id);
                return;
            }

            this.subscriptions.forEach(sub => sub(incomingEvent as JsonRpcEvent));
        }
    }
}
