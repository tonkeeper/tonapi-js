import { MempoolObserver, StreamProvider, StreamSubscription } from '../../src';
import { mockAccountEvent, mockMempoolEvent } from '../mocks';

describe('Mempool observer tests', () => {
    let mockProvider: StreamProvider;
    let mempoolObserver: MempoolObserver;

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

        mempoolObserver = new MempoolObserver(mockProvider);
    });

    it('should subscribe and unsubscribe', () => {
        const subscriber = jest.fn();
        const unsubscribeHandle = mempoolObserver.subscribe('all', subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_mempool');

        streamSubscriptionInternal?.({ method: 'mempool_message', params: mockMempoolEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenCalledWith(mockMempoolEvent);

        const mockMempoolEvent1 = { boc: '123' };
        streamSubscriptionInternal?.({ method: 'mempool_message', params: mockMempoolEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(2);
        expect(subscriber).toHaveBeenLastCalledWith(mockMempoolEvent1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_mempool');
    });

    it('should unsubscribe only from unused account', () => {
        const subscriber1and2 = jest.fn();
        const subscriber3 = jest.fn();
        const accToWatch1 = '0:00';
        const accToWatch2 = '0:01';
        const accToWatch3 = '0:02';
        const unsubscribeHandle1and2 = mempoolObserver.subscribe(
            [accToWatch1, accToWatch2],
            subscriber1and2
        );

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith(
            'subscribe_mempool',
            `${accToWatch1},${accToWatch2}`
        );

        const unsubscribeHandle3 = mempoolObserver.subscribe(
            [accToWatch2, accToWatch3],
            subscriber3
        );
        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(2);
        expect(mockProvider.send).toHaveBeenLastCalledWith('subscribe_mempool', accToWatch3);

        const mockMempoolEvent1and2 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch1]
        };
        streamSubscriptionInternal?.({ method: 'mempool_message', params: mockMempoolEvent1and2 });
        expect(subscriber1and2).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledTimes(0);
        expect(subscriber1and2).toHaveBeenCalledWith(mockMempoolEvent1and2);

        const mockMempoolEvent3 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch2]
        };
        streamSubscriptionInternal?.({
            method: 'mempool_message',
            params: mockMempoolEvent3
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(2);
        expect(subscriber3).toHaveBeenLastCalledWith(mockMempoolEvent3);
        expect(subscriber3).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenLastCalledWith(mockMempoolEvent3);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle3();
        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_mempool', accToWatch3);

        const mockMempoolEvent4 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch2, accToWatch3]
        };
        streamSubscriptionInternal?.({
            method: 'mempool_message',
            params: mockMempoolEvent4
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(3);
        expect(subscriber3).toHaveBeenCalledTimes(1);
        expect(subscriber1and2).toHaveBeenLastCalledWith(mockMempoolEvent4);

        unsubscribeHandle1and2();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith(
            'unsubscribe_mempool',
            `${accToWatch1},${accToWatch2}`
        );
    });

    it('should handle "all" accs subscription correctly', () => {
        const subscriber1and2 = jest.fn();
        const subscriber3 = jest.fn();
        const accToWatch1 = '0:00';
        const accToWatch2 = '0:01';
        const unsubscribeHandle1and2 = mempoolObserver.subscribe(
            [accToWatch1, accToWatch2],
            subscriber1and2
        );

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith(
            'subscribe_mempool',
            `${accToWatch1},${accToWatch2}`
        );

        const unsubscribeHandle3 = mempoolObserver.subscribe('all', subscriber3);
        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(2);
        expect(mockProvider.send).toHaveBeenLastCalledWith('subscribe_mempool');

        const mockMempoolEvent1and2 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch1]
        };
        streamSubscriptionInternal?.({ method: 'mempool_message', params: mockMempoolEvent1and2 });
        expect(subscriber1and2).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledTimes(1);
        expect(subscriber1and2).toHaveBeenCalledWith(mockMempoolEvent1and2);
        expect(subscriber3).toHaveBeenCalledWith(mockMempoolEvent1and2);

        streamSubscriptionInternal?.({
            method: 'mempool_message',
            params: mockMempoolEvent
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledTimes(2);
        expect(subscriber3).toHaveBeenCalledWith(mockMempoolEvent);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle3();
        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        expect(mockProvider.send).toHaveBeenCalledTimes(2);

        const mockMempoolEvent4 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch2]
        };
        streamSubscriptionInternal?.({
            method: 'mempool_message',
            params: mockMempoolEvent4
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(2);
        expect(subscriber3).toHaveBeenCalledTimes(2);
        expect(subscriber1and2).toHaveBeenCalledWith(mockMempoolEvent4);

        unsubscribeHandle1and2();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_mempool');
    });

    it('should skip not related events', () => {
        const subscriber = jest.fn();
        const accToWatch = '0:00';
        mempoolObserver.subscribe(accToWatch, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_mempool', accToWatch);

        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent });
        expect(subscriber).not.toHaveBeenCalled();

        const mockMempoolEvent1 = {
            ...mockMempoolEvent,
            involved_accounts: [accToWatch]
        };
        streamSubscriptionInternal?.({ method: 'mempool_message', params: mockMempoolEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenLastCalledWith(mockMempoolEvent1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        const mockMempoolEventWithOtherAcc = {
            ...mockMempoolEvent,
            involved_accounts: ['0:01']
        };
        streamSubscriptionInternal?.({
            method: 'mempool_message',
            params: mockMempoolEventWithOtherAcc
        });
        expect(subscriber).toHaveBeenCalledTimes(1);
    });
});
