import { JsonRpcEvent, JsonRpcRequest } from '../models';

export type StreamSubscription<T extends JsonRpcEvent = JsonRpcEvent> = (event: T) => void;

export interface StreamProvider {
    open(options?: { openingDeadlineMS?: number }): Promise<void>;

    close(): Promise<void>;

    send(method: JsonRpcRequest['method'], params?: JsonRpcRequest['params']): Promise<void>;

    subscribe(subscription: StreamSubscription): () => void;
}
