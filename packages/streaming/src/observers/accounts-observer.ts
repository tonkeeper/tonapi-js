import { AccountEvent, AccountEventRpc, JsonRpcEvent } from '../models';
import { Observer } from './observer';

export type AccountsObserverTrigger = { account: string; operations?: string[] };

export class AccountsObserver extends Observer<AccountsObserverTrigger, AccountEvent> {
    protected override afterSubscribed(subscriber: { triggers: AccountsObserverTrigger[] }) {
        const triggersToAdd = subscriber.triggers.filter(trigger =>
            this.subscribers
                .filter(s => s !== subscriber)
                .every(sub => {
                    sub.triggers.every(subTrigger => {
                        if (trigger.account === subTrigger.account) {
                            if (!subTrigger.operations?.length) {
                                return false;
                            }

                            const isForAllOps = !trigger.operations?.length;
                            const isNotIncluded = trigger.operations!.some(
                                op => !subTrigger.operations!.includes(op)
                            );

                            return isForAllOps || isNotIncluded;
                        }

                        return true;
                    });
                })
        );

        if (triggersToAdd.length) {
            const params = subscriber.triggers.map(t => {
                if (!t.operations?.length) {
                    return t.account;
                }

                return `${t.account};operations=${t.operations.join(',')}`;
            });

            this.send('subscribe_account', params);
        }
    }

    protected override afterUnsubscribed({ triggers }: { triggers: AccountsObserverTrigger[] }) {
        const accountsToRemove = triggers
            .filter(t =>
                this.subscribers.every(s => s.triggers.every(st => st.account !== t.account))
            )
            .map(t => t.account);

        if (accountsToRemove.length) {
            this.send('unsubscribe_account', accountsToRemove);
        }
    }

    protected override extractEvent(rpcEvent: JsonRpcEvent): AccountEvent | undefined {
        if (rpcEvent.method !== 'account_transaction') {
            return;
        }

        return (rpcEvent as AccountEventRpc).params;
    }

    protected override tryTrigger(trigger: AccountsObserverTrigger, event: AccountEvent) {
        if (event.account_id === trigger.account) {
            return true;
        }

        return false; // TODO check op, not yet supported by tonapi;
    }
}
