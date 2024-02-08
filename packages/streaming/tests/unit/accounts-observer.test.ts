import { AccountsObserver, StreamProvider, StreamSubscription } from '../../src';
import { mockAccountEvent, mockTraceEvent } from '../mocks';

describe('Accounts observer tests', () => {
    let mockProvider: StreamProvider;
    let accountsObserver: AccountsObserver;

    let unsubscribeMock: jest.Mock;
    let streamSubscriptionInternal: StreamSubscription | undefined;

    beforeEach(() => {
        mockProvider = {} as StreamProvider;

        unsubscribeMock = jest.fn();
        mockProvider.subscribe = jest.fn(callback => {
            streamSubscriptionInternal = callback;
            return unsubscribeMock;
        });
        mockProvider.send = jest.fn();

        accountsObserver = new AccountsObserver(mockProvider);
    });

    it('should subscribe and unsubscribe', () => {
        const subscriber = jest.fn();
        const accToWatch = mockAccountEvent.account_id;
        const unsubscribeHandle = accountsObserver.subscribe({ account: accToWatch }, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_account', [accToWatch]);

        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenCalledWith(mockAccountEvent);

        const mockAccountEvent1 = { ...mockAccountEvent, tx_hash: '123' };
        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(2);
        expect(subscriber).toHaveBeenLastCalledWith(mockAccountEvent1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_account', [accToWatch]);
    });

    it('should skip not related events', () => {
        const subscriber = jest.fn();
        const accToWatch = mockAccountEvent.account_id;
        accountsObserver.subscribe({ account: accToWatch }, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_account', [accToWatch]);

        streamSubscriptionInternal?.({ method: 'trace', params: mockTraceEvent });
        expect(subscriber).not.toHaveBeenCalled();

        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenLastCalledWith(mockAccountEvent);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        const mockAccountEvent1 = {
            ...mockAccountEvent,
            account_id: ['0:1111555555555555555555555555555555555555555555555555555555551111']
        };
        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(1);
    });
});
