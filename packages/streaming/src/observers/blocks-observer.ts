import { JsonRpcEvent, BlockEvent, BlockEventRpc } from '../models';
import { Observer } from './observer';

export class BlocksObserver extends Observer<number, BlockEvent> {
    public subscribe(workchain: -1 | 0, callback: (event: BlockEvent) => void): () => void {
        return super.subscribe(workchain, callback);
    }

    protected override afterSubscribed({ triggers }: { triggers: number[] }) {
        if (triggers.length !== 1) {
            throw new Error('BlocksObserver supports only one trigger-workchain');
        }
        const wc = triggers[0]!;

        const needAddWc = this.subscribers.every(s => !s.triggers.includes(wc));
        if (needAddWc) {
            this.send('subscribe_block', `workchain=${wc}`);
        }
    }

    protected override afterUnsubscribed({ triggers }: { triggers: number[] }) {
        if (triggers.length !== 1) {
            throw new Error('BlocksObserver supports only one trigger-workchain');
        }
        const wc = triggers[0]!;
        const needRemoveWc = this.subscribers.every(s => !s.triggers.includes(wc));

        if (needRemoveWc) {
            this.send('unsubscribe_block', `workchain=${wc}`);
        }
    }

    protected override extractEvent(rpcEvent: JsonRpcEvent): BlockEvent | undefined {
        if (rpcEvent.method !== 'block') {
            return;
        }

        return (rpcEvent as BlockEventRpc).params;
    }

    protected override tryTrigger(trigger: number, event: BlockEvent) {
        return event.workchain === trigger;
    }
}
