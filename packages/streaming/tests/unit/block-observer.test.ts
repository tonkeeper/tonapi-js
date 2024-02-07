import { BlocksObserver, StreamProvider, StreamSubscription } from '../../src';
import { mockAccountEvent, mockBlockEvent } from '../mocks';

describe('Blocks observer tests', () => {
    let mockProvider: StreamProvider;
    let blockObserver: BlocksObserver;

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

        blockObserver = new BlocksObserver(mockProvider);
    });

    it('should subscribe and unsubscribe', () => {
        const subscriber = jest.fn();
        const unsubscribeHandle = blockObserver.subscribe(0, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_block', [`workchain=0`]);

        streamSubscriptionInternal?.({ method: 'block', params: mockBlockEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenCalledWith(mockBlockEvent);

        const mockBlockEvent1 = { ...mockBlockEvent, seqno: 123 };
        streamSubscriptionInternal?.({ method: 'block', params: mockBlockEvent1 });
        expect(subscriber).toHaveBeenCalledTimes(2);
        expect(subscriber).toHaveBeenLastCalledWith(mockBlockEvent1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        expect(unsubscribeMock).toHaveBeenCalledTimes(0);
        unsubscribeHandle();
        expect(unsubscribeMock).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('unsubscribe_block', [`workchain=0`]);
    });

    it('should skip not related events', () => {
        const subscriber = jest.fn();
        blockObserver.subscribe(0, subscriber);

        expect(mockProvider.subscribe).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);
        expect(mockProvider.send).toHaveBeenCalledWith('subscribe_block', [`workchain=0`]);

        streamSubscriptionInternal?.({ method: 'account_transaction', params: mockAccountEvent });
        expect(subscriber).not.toHaveBeenCalled();

        streamSubscriptionInternal?.({ method: 'block', params: mockBlockEvent });
        expect(subscriber).toHaveBeenCalledTimes(1);
        expect(subscriber).toHaveBeenLastCalledWith(mockBlockEvent);
        expect(mockProvider.send).toHaveBeenCalledTimes(1);

        const mockBlockEventForOtherWC = { ...mockBlockEvent, workchain: -1 };
        streamSubscriptionInternal?.({ method: 'block', params: mockBlockEventForOtherWC });
        expect(subscriber).toHaveBeenCalledTimes(1);
    });
});
