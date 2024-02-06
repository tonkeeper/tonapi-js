import { AccountEvent, AccountEventRpc, JsonRpcEvent } from '../models';
import { Observer } from './observer';

export type AccountsObserverTrigger = { account: string; operations?: string[] };

export class AccountsObserver extends Observer<AccountsObserverTrigger, AccountEvent> {
    protected override afterSubscribed({ triggers }: { triggers: AccountsObserverTrigger[] }) {
        const triggersToAdd: AccountsObserverTrigger[] = [];

        triggers.forEach(trigger => {
            this.subscribers.forEach(sub => {
                sub.triggers.forEach(subTrigger => {
                    if (trigger.account === subTrigger.account) {
                        if (!subTrigger.operations?.length) {
                            return;
                        }

                        const isForAllOps = !trigger.operations?.length;
                        const isNotIncluded = trigger.operations!.some(
                            op => !subTrigger.operations!.includes(op)
                        );

                        if (isForAllOps || isNotIncluded) {
                            triggersToAdd.push(trigger);
                        }
                    }
                });
            });
        });

        if (triggersToAdd.length) {
            const params = triggers.map(t => {
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

        return false; // TODO check op;
    }
}
