import { TraceEvent, JsonRpcEvent, TraceEventRpc } from '../models';
import { Observer } from './observer';

export class TraceObserver extends Observer<string, TraceEvent> {
    protected override afterSubscribed({ triggers }: { triggers: string[] }) {
        const accountsToAdd = triggers.filter(t =>
            this.subscribers.every(s => !s.triggers.includes(t))
        );

        if (accountsToAdd.length) {
            this.send('subscribe_trace', accountsToAdd);
        }
    }

    protected override afterUnsubscribed({ triggers }: { triggers: string[] }) {
        const accountsToRemove = triggers.filter(t =>
            this.subscribers.every(s => !s.triggers.includes(t))
        );

        if (accountsToRemove.length) {
            this.send('unsubscribe_trace', accountsToRemove);
        }
    }

    protected override extractEvent(rpcEvent: JsonRpcEvent): TraceEvent | undefined {
        if (rpcEvent.method !== 'trace') {
            return;
        }

        return (rpcEvent as TraceEventRpc).params;
    }

    protected override tryTrigger(trigger: string, event: TraceEvent) {
        return event.accounts.some(acc => acc.includes(trigger));
    }
}
