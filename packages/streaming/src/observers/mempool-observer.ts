import { JsonRpcEvent, MempoolEvent, MempoolEventRpc } from '../models';
import { Observer } from './observer';

export class MempoolObserver extends Observer<string, MempoolEvent> {
    /**
     *
     * @param accounts list of accounts to watch (in raw-form) or a single account (in raw-form) or 'all' to watch all the accounts
     * @param callback
     */
    public override subscribe(
        accounts: string[] | string,
        callback: (event: MempoolEvent) => void
    ): () => void {
        return super.subscribe(accounts, callback);
    }

    protected override afterSubscribed({ triggers }: { triggers: string[] }) {
        if (triggers.includes('all')) {
            this.send('subscribe_mempool');
            return;
        }

        const accountsToAdd = triggers.filter(t =>
            this.subscribers.every(s => !s.triggers.includes(t))
        );

        if (accountsToAdd.length) {
            this.send('subscribe_mempool', accountsToAdd.join(','));
        }
    }

    protected override afterUnsubscribed({ triggers }: { triggers: string[] }) {
        let accountsToRemove = triggers.filter(t =>
            this.subscribers.every(s => !s.triggers.includes(t))
        );

        if (accountsToRemove.includes('all') && !this.subscribers.length) {
            this.send('unsubscribe_mempool');
            return;
        }

        accountsToRemove = accountsToRemove.filter(t => t !== 'all');
        if (accountsToRemove.length) {
            this.send('unsubscribe_mempool', accountsToRemove.join(','));
        }
    }

    protected override extractEvent(rpcEvent: JsonRpcEvent): MempoolEvent | undefined {
        if (rpcEvent.method !== 'mempool_message') {
            return;
        }

        return (rpcEvent as MempoolEventRpc).params;
    }

    protected override tryTrigger(trigger: string, event: MempoolEvent) {
        if (!event.involved_accounts) {
            return trigger === 'all';
        }

        return event.involved_accounts.some(acc => acc.includes(trigger));
    }
}
