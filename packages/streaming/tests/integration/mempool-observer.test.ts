import { MempoolObserver, WebsocketStreamProvider } from '../../src';
import { TONAPI_TOKEN } from '../env';

describe('Accounts observer tests', () => {
    let wsProvider: WebsocketStreamProvider;
    let mempoolObserver: MempoolObserver;

    beforeAll(async () => {
        wsProvider = new WebsocketStreamProvider(
            `wss://tonapi.io/v2/websocket?token=${TONAPI_TOKEN}`
        );
        await wsProvider.open();
        mempoolObserver = new MempoolObserver(wsProvider);
    });

    afterAll(async () => {
        await wsProvider.close();
    });

    it('should receive an event from the mempool', done => {
        mempoolObserver.subscribe('all', v => {
            expect(v).toBeTruthy();

            done();
        });
    }, 20000);
});
