import { JsonRpcEvent } from './rpc';

export type StreamSubscription<T extends JsonRpcEvent = JsonRpcEvent> = (event: T) => void;
