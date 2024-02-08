import { StreamProvider, StreamSubscription, TraceObserver } from '../../src';
import { mockAccountEvent, mockTraceEvent } from '../mocks';

describe('Trace observer tests', () => {
    let mockProvider: StreamProvider;
    let traceObserver: TraceObserver;

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

        traceObserver = new TraceObserver(mockProvider);
    });

    it('should subscribe and unsubscribe', () => {
        const subscriber = jest.fn();
        const accToWatch = mockTraceEvent.accounts[0]!;
        const unsubscribeHandle = traceObserver.subscribe(accToWatch, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_trace', [accToWatch]);

        streamSubscriptionInternal?.({ method: 'trace', params: mockTraceEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenCalledWith(mockTraceEvent);

        const mockTraceEvent1 = { ...mockTraceEvent, hash: '123' };
        streamSubscriptionInternal?.({ method: 'trace', params: mockTraceEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(2);
        expect(subscriber).toHaveBeenLastCalledWith(mockTraceEvent1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_trace', [accToWatch]);
    });

    it('should unsubscribe only from unused account', () => {
        const subscriber1and2 = jest.fn();
        const subscriber3 = jest.fn();
        const accToWatch1 = mockTraceEvent.accounts[0]!;
        const accToWatch2 = '0:00';
        const accToWatch3 = '0:01';
        const unsubscribeHandle1and2 = traceObserver.subscribe(
            [accToWatch1, accToWatch2],
            subscriber1and2
        );

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_trace', [
            accToWatch1,
            accToWatch2
        ]);

        const unsubscribeHandle3 = traceObserver.subscribe([accToWatch3], subscriber3);
        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(2);
        expect(mockProvider.send).toHaveBeenLastCalledWith('subscribe_trace', [accToWatch3]);

        streamSubscriptionInternal?.({ method: 'trace', params: mockTraceEvent });
        expect(subscriber1and2).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledTimes(0);
        expect(subscriber1and2).toHaveBeenCalledWith(mockTraceEvent);

        const mockTraceEvent1 = { ...mockTraceEvent, accounts: [accToWatch3] };
        streamSubscriptionInternal?.({
            method: 'trace',
            params: mockTraceEvent1
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledTimes(1);
        expect(subscriber3).toHaveBeenCalledWith(mockTraceEvent1);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle3();
        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_trace', [accToWatch3]);

        const mockTraceEvent2 = { ...mockTraceEvent, accounts: [accToWatch2, accToWatch3] };
        streamSubscriptionInternal?.({
            method: 'trace',
            params: mockTraceEvent2
        });
        expect(subscriber1and2).toHaveBeenCalledTimes(2);
        expect(subscriber3).toHaveBeenCalledTimes(1);
        expect(subscriber1and2).toHaveBeenCalledWith(mockTraceEvent2);

        unsubscribeHandle1and2();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_trace', [
            accToWatch1,
            accToWatch2
        ]);
    });

    it('should skip not related events', () => {
        const subscriber = jest.fn();
        const accToWatch = mockTraceEvent.accounts[0]!;
        traceObserver.subscribe(accToWatch, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_trace', [accToWatch]);

        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent });
        expect(subscriber).not.toHaveBeenCalled();

        streamSubscriptionInternal?.({ method: 'trace', params: mockTraceEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenLastCalledWith(mockTraceEvent);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        const mockBlockEventForOtherWC = {
            ...mockTraceEvent,
            accounts: ['0:1111555555555555555555555555555555555555555555555555555555551111']
        };
        streamSubscriptionInternal?.({ method: 'block', params: mockBlockEventForOtherWC });
        expect(subscriber).toHaveBeenCalledTimes(1);
    });
});
