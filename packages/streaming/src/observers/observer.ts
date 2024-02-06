import { Stream } from '../stream';
import { JsonRpcEvent } from '../models';

export abstract class Observer<T, E> {
    protected subscribers: {
        callback: (event: E) => void;
        triggers: T[];
    }[] = [];

    private socketSubscription: (() => void) | undefined;

    constructor(private readonly stream: Stream) {}

    public subscribe(triggers: T[] | T, callback: (event: E) => void) {
        if (!Array.isArray(triggers)) {
            triggers = [triggers];
        }

        const subscriber = { callback, triggers };
        this.subscribers = this.subscribers.concat({ callback, triggers });

        if (!this.socketSubscription) {
            this.socketSubscription = this.stream.subscribe(this.onEvent);
        }

        this.afterSubscribed(subscriber);

        return () => {
            this.subscribers = this.subscribers.filter(s => s !== subscriber);

            if (!this.subscribers.length) {
                this.socketSubscription?.();
            }

            this.afterUnsubscribed(subscriber);
        };
    }

    protected send(...args: Parameters<Stream['send']>) {
        return this.stream.send(...args);
    }

    protected onEvent = (rpcEvent: JsonRpcEvent): void => {
        const event = this.extractEvent(rpcEvent);
        if (!event) {
            return;
        }
        this.subscribers.forEach(s => {
            if (s.triggers.some(t => this.tryTrigger(t, event))) {
                s.callback(event);
            }
        });
    };

    protected abstract afterSubscribed(subscriber: {
        triggers: T[];
        callback: (event: E) => void;
    }): void;

    protected abstract afterUnsubscribed(subscriber: {
        triggers: T[];
        callback: (event: E) => void;
    }): void;

    protected abstract tryTrigger(trigger: T, event: E): boolean;

    protected abstract extractEvent(rpcEvent: JsonRpcEvent): E | undefined;
}
